$(function(){
	window.apiModule = (function(){
		var base_url,keys, tokens, names, queryProfileToken;
		//(PRAdmin) Add queryProfileToken to each call if set in localStorage
		queryProfileToken=localStorage.queryProfileToken||false;
		normalModel=0;
		var m = {};
		m.currentIndex=0;
		//localStorage.defaultKeyset='michaelb';
		var keyset='fieldroutes_default';
		var keysets= {};
		var keysetUI;
		
		m.getKeyset = function(){ return keyset; };
		m.setKeyset = function(newKeyset){
			localStorage.lastKeyset=newKeyset;
			if(typeof keysets[newKeyset]==='undefined') return;
			keyset=newKeyset;

			base_url=keysets[newKeyset]['base_url'];
			keys=keysets[newKeyset]['keys'];
			tokens=keysets[newKeyset]['tokens'];
			names=keysets[newKeyset]['names']||[];
			console.log('set keyset: '+newKeyset+' ('+base_url+')');
			keysetUI.find('.currentKeyset')[0].innerHTML=newKeyset;
		};
		m.setKeyIndex = function(officeIndex){
			if(typeof keys[officeIndex] === 'undefined'){
				return false;
			}
			m.currentIndex=officeIndex;
			return m;
		};
		m.loadKeyset = function(keyName, keyData, setCurrent){
			if(typeof keysets[keyName] === 'undefined'){
				keysetUI.find('.keysets')[0].innerHTML += '<a class="keyset" href="#">'+keyName+'</a><br/>';
			}
			keysets[keyName]=keyData;
			if(setCurrent){
				m.setKeyset(keyName);
			}
		};
		m.saveKeysetsLocally = function(){
			localStorage.keysets = JSON.stringify(keysets);
		};
		
		m.init = function(){
			//initialize keyset UI
			keysetUI=$("<div class='keysetUI' style='display:flex;'>\
				<div style='flex-grow:1;'>\
					<h4 style='margin:.5em 0;'>Active Keyset</h4>\
					<div class='currentKeyset'></div>\
				</div>\
				<div style='flex-grow:1;'>\
					<h4 style='margin:.5em 0;'>Saved keysets</h4>\
					<div class='keysets'></div>\
				</div>\
			</div>");
			keysetUI.on('click','.keyset',function(e){
				apiModule.setKeyset($(this).text());
				e.preventDefault();
			});
			
			
			//Add demo keyset
			m.loadKeyset('fieldroutes_default',{
				"base_url":"https://stagingdemo.pestroutes.com/api/",
				"keys":["x88492884d8154febd1057372867c2e34b371d8fb"],
				"tokens":["x6915e71f53708f17dba090febd2df4f9d79364d7"],
			});
			
			
			//Restore keys from localStorage
			if(typeof localStorage.keysets !== 'undefined'){
				var localStorageKeys = JSON.parse(localStorage.keysets);
				for(key in localStorageKeys){
					m.loadKeyset(key,localStorageKeys[key]);
					//keysets[key]=localStorageKeys[key];
				}
			}
			
			//attempt to set default keyset
			if(localStorage.defaultKeyset&&typeof keysets[localStorage.defaultKeyset]!=='undefined'){
				keyset=localStorage.defaultKeyset;
			}
			if(typeof localStorage.callHistory === 'undefined'){
				localStorage.callHistory='';
			}
			
			m.setKeyset(keyset); //Initialize the keys and base_url
		}
		m.getKeysetUI=function(){ return keysetUI;};
		m.init();
		
		m.call = async function(endpoint, action, params){
			localStorage.callHistory=JSON.stringify({'endpoint':endpoint,'action':action,'time':(new Date().toISOString()),...params})+_nl+localStorage.callHistory; //TODO: convert search/get $.post to m.call
			return new Promise( function( resolve, reject ){
				params = params || {};
				params["authenticationKey"]= keys[m.currentIndex];
				params["authenticationToken"]=tokens[m.currentIndex];
				if(typeof window.login_token!=='undefined'){
					params['login_token']=window.login_token;
				}
				if(normalModel){
					params["normalModel"]=1;
				}
				if(queryProfileToken){
					params["queryProfileToken"]=queryProfileToken;
				}
				//console.log(params);
				$.post(base_url+endpoint+'/'+action, params,
				function(response){
					if(response.success==false || response.errorMessage){
						console.error(response.errorMessage);
						reject(response);
						return;
					}
					resolve( response );
				}, 'json').fail(function(){
					reject( params );
				});
			});
		};

		m.search = async function(type, params, fullyResolveEverything){
			var crazy = fullyResolveEverything||false;
			return new Promise( function( resolve, reject ){
				params = params || {};
				params["authenticationKey"]= keys[m.currentIndex];
				params["authenticationToken"]=tokens[m.currentIndex];
				if(typeof window.login_token!=='undefined'){
					params['login_token']=window.login_token;
				}
				if(normalModel){
					params["normalModel"]=1;
				}
				if(queryProfileToken){
					params["queryProfileToken"]=queryProfileToken;
				}
				$.post(base_url+type+'/search',params,
				function(response){
					if(response.success==false || response.errorMessage){
						console.error(response.errorMessage);
						reject(response.errorMessage);
						return;
					}

					if(params["includeData"]==1 && !crazy){
						resolve(response[response['propertyNameData']]);
					}else if(params["includeData"]==1 && crazy){
						//OK, fully resolve errrrrything
						//If hit return cap of 50k(49k), recursively requery for more based on lastID
						if(response[ response['propertyName']+'NoDataExported' ].length==49000){
							params[ response['idName'] ]={
								"operator": ">",
								"value": response[response['propertyName']+'NoDataExported'][response[response['propertyName']+'NoDataExported'].length-1]
							};
							params['includeData']=0;
							m.search(type, params,1).then(function(moreIDs){
								return m.staggeredRequest(type, [...response[response['propertyName']+'NoDataExported'], ...moreIDs], response['idName']);
							}).then(function(moreData){
								resolve([...response[response['propertyNameData']],...moreData]);
							});
							
						}else{
							m.staggeredRequest(type, response[response['propertyName']+'NoDataExported'],response['propertyName']).then(function(moreData){
								resolve([...response[response['propertyNameData']],...moreData]);
							});
						}

					}else if(response[ response['propertyName'] ].length==50000&&crazy){ //If hit return cap of 50k, recursively requery for more based on lastID
						params[ response['idName'] ]={
							"operator": ">",
							"value": response[response['propertyName']][response[response['propertyName']].length-1]
						};
						m.search(type, params, 1).then( (moreIDs)=>{
							resolve([...response[response['idName']], ...moreIDs]);
						});
						
					}else if(typeof response['propertyName'] !== 'undefined'){
						resolve(response[response['propertyName']]);
					}else{
						reject(response);
					}
				}, 'json').fail(function(){
					reject(false);
				});
			});
		};

		m.get = async function( type, ids, primary_key){
			return new Promise( function( resolve, reject ){
				primary_key=primary_key||type+'IDs';
				var params = {};
				params[primary_key]=ids;
				params["authenticationKey"]= keys[m.currentIndex];
				params["authenticationToken"]=tokens[m.currentIndex];
				if(typeof window.login_token!=='undefined'){
					params['login_token']=window.login_token;
				}
				if(normalModel){
					params["normalModel"]=1;
				}
				if(queryProfileToken){
					params["queryProfileToken"]=queryProfileToken;
				}
				$.post(base_url+type+'/get', params,
					function(response){
					if(response.errorMessage){
						console.error(response.errorMessage);
					}
					
					resolve(response[type+'s']);
				}, 'json').fail(function(){
					console.error('An API Request failed before it could reach the server, please check your network connection and try again.');
					reject();
				});
			});
		};

		//Resolve IDs into entities 1000 per request
		m.staggeredRequest = async function( type, ids, primary_key, threadCount ){
			return new Promise( function( resolve, reject ){
				primary_key=primary_key||type+'ID';
				if(!ids||ids.length == 0){
					resolve([]);
				}
				threadCount=threadCount||4;

				ids = ids.unique();

				var chunks = [];
				var len = ids.length;

				while(ids.length){
					chunks.push(ids.splice(0,1000));
				}

				if(chunks.length<threadCount){
					threadCount=chunks.length;
				}

				var result = [];
				var queueNext = function( response ){
					if(typeof response !== 'undefined'){
						result = result.concat(response);
					}
					if(chunks.length==0){ return; }
					return m.get(type, chunks.shift(), primary_key).then(queueNext);
				}
				var promiseChains=[];
				//get n threads started
				for(i=threadCount;i>0;--i){
					promiseChains.push(queueNext());
				}

				Promise.all(promiseChains).then(function(){
					resolve(result);
				});
			});
		};

		m.staggeredWrite = async function( type, action, entities, threadCount, options){
			return new Promise( function( resolve, reject ){
				if(!entities||entities.length == 0){
					resolve({'success':[],'failure':[]});
				}
				threadCount=threadCount||4;
				options=options||{};
				options.fullSuccessPayload=options.fullSuccessPayload||0;
				var successes = [];
				var failures = [];

				if(entities.length<threadCount){
					threadCount=entities.length;
				}
				
				var queueNext = function(){
					if(entities.length==0){ return; }
					return m.call(type, action, entities.shift())
					.then(function(response){
						if(response.success){
							if(options.fullSuccessPayload){
								successes.push(response);
							}
							else{
								successes.push(response.result);
							}
						}else{
							failures.push(response);
						}
					},function(response){failures.push(response);})
					.then(queueNext, queueNext); //success, fail
				}
				var promiseChains=[];
				//get n threads started
				for(i=threadCount;i>0;--i){
					promiseChains.push(queueNext());
				}

				//Return when all jobs are finished
				Promise.all(promiseChains).then(function(){
					resolve({'success':successes,'failure':failures});
				});
			});
		};

		m.csvToArray = function(input, delimiter = ","){
			input=input.replace(/(\r\n|\n\r)/g, '\n');
			let headers = input.slice(0, input.indexOf("\n")).split(delimiter);
			let rows = input.slice(input.indexOf("\n") + 1).split("\n");
				let output = rows.map(function(row){
					let values = row.split(delimiter);
					let el = headers.reduce(function(object, header, index){
						object[header] = values[index];
						return object;
					}, {});
					return el;
				});

			return output;
		}

		var regex13 = new RegExp(String.fromCharCode(13), 'gm');
		//Extracts the specified columns from the data, then exports a standard CSV file of the given name
		m.download = function(data, columns, filename, targetElement){
			if((!data||!data.length)&&(!columns||!columns.length)){
				return false;
			}
			let flatArray=0;
			if(!columns||!columns.length){
				columns=Object.keys(data[0]);
				if(!columns.length){
					columns=['ID'];
					flatArray=1;
				}
			}
			filename=filename||'pestroutes_export_'+(new Date().toISOString())+'.csv';
			var target = targetElement||$('.downloads');
			var numKeys=columns.length;
			var rows = [];

			//push column titles
			rows.push(columns.join(','));

			//push the rest of the rows
			for(var i=0, l=data.length; i<l; ++i){
				var row=[];
				var cell;
				for(var j=0;j<numKeys;++j){

					cell = flatArray?data[i]:data[i][columns[j]];
					if(cell && typeof cell !== "object" && typeof cell.replace !== 'undefined'){
						try{
							cell = cell.replace(/(\r\n|\n|\r)/gm,"").replace(/"/gm, "").replace(regex13, "").replace(/\t/gm, '');
						} catch{
							console.log("COLUMN ISSUE" + columns[j]);
							console.log(cell);
						}
					}
					row.push('"'+cell+'"');
				}
				rows.push(row.join(','));
			}

			var csvString = rows.join("\n");
			var a         = document.createElement('a');
			var csvData   = new Blob([csvString], { type: 'text/csv' }); 
			var csvUrl 	  = URL.createObjectURL(csvData);
			a.href 		  =  csvUrl;
			$(a).appendTo(target).text(filename);
			a.click();//automatically click the anchor and start the download
			target.append('<br/>');
			return m;
		};

		m.downloadJSON=function(object, filename, targetElement){
			filename=filename||'pestroutes_export_'+(new Date().toISOString())+'.json';
			var target = targetElement||$('.downloads')||document;
			var jsonString = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(object,null,'\t'));
			var a       = document.createElement('a');
			a.href=jsonString;
			a.target      = '_blank';
			a.download    = filename;
			$(a).appendTo(target).text(filename);a.click();

			return m;
		};

		m.shuffle = function(array){
			for(var i = array.length - 1; i > 0; i--) {
				var rand = Math.floor(Math.random() * (i + 1));
				[array[i], array[rand]] = [array[rand], array[i]]
			}
		};

		//For recompleting logs as they are stored in PestRoutes DB with action/endpoint in the JSON
		/* PR admin generate with Promise.resolve() + SELECT CONCAT('.then( ()=>apiModule.recomplete(',a.requestParameters,', "michaelb") )')
		*/
		m.recompleteIssues=[];
		m.recompleteWith=false;
		m.recomplete = function(params, domain){
			return new Promise( function( resolve, reject ){
				for(var key in params){
					try{
						let decoded = JSON.parse(params[key]);
						if(typeof decoded === 'object'){
							params[key]=decoded;
						}
					}catch(e){}
				}

				var callUrl;
				if(typeof domain !=='undefined'){
					callUrl='https://'+domain+'.pestroutes.com/api/';
				}else if(m.recompleteWith!=false){
					callUrl='https://'+m.recompleteWith+'.pestroutes.com/api/';
				}else{
					callUrl=base_url;
				}
				$.post(callUrl+params['endpoint']+'/'+params['action'], params,
				function(response){
					if(typeof response['processingTime']!=='undefined'){
						processTime = response['processingTime'].split(' ')[0];
					}else{
						processTime = 0;
					}
					console.log(processTime);
					if(processTime>2000){
						console.error(params);
						m.recompleteIssues.push(params);
					}
					resolve(response);
				},'json').fail(function(r){
					reject(r);
				});
			});
		};
		return m;
	})();
});
var _nl=`
`;
Array.prototype.unique = function(){
	return this.filter(function (value, index, self){
		return self.indexOf(value) === index;
	});
};