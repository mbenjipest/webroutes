
<h3>Launch tests for datalink</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'link',
	'lname':'green',
	'dataLink':{
		'dataLinkAlias':'x'+Date.now(),
		'dataLink':{'best':'Data'}
	}
}).then(function(r){
	return apiModule.search('customer',{
		'includeData':1,
		'dataLink':1,
		'customerIDs':[r.result]
	});
}).then(function(c){
	console.log(c[0]);
	console.log(c[0]['dataLink']);
	console.log(c[0]['dataLink']['dataLink']);
}).then(function(){
	//add data after and update tests
	apiModule.call('customer','create',{
		'fname':'link',
		'lname':'red',
	}).then(function(r){
		window.customerID=r.result;
		return apiModule.call('dataLink','create',{
			'dataLinkAlias':'m'+Date.now(),
			'dataLinkType':'customer',
			'dataLinkKey':window.customerID,
			'dataLink':{'oops':'data'}
		});


	}).then(function(r){
		return apiModule.search('customer',{
			'includeData':1,
			'dataLink':1,
			'customerIDs':[window.customerID]
		});
	}).then(function(c){
		console.log(c[0]);
		console.log(c[0]['dataLink']);
		console.log(c[0]['dataLink']['dataLink']);
	}).then(function(){
		return apiModule.call('dataLink','update',{
			'dataLinkType':'customer',
			'dataLinkKey':window.customerID,
			'dataLink':{'updated':'data'}
		});
	}).then(function(){
		return apiModule.search('customer',{
			'includeData':1,
			'dataLink':1,
			'customerIDs':[window.customerID]
		});
	}).then(function(c){
		console.log(c[0]);
		console.log(c[0]['dataLink']);
		console.log(c[0]['dataLink']['dataLink']);
	}).then(function(){
		return apiModule.call('customer','update',{
			'customerID':window.customerID,
			'dataLink':{'integrated':'update'}
		});
	}).then(function(){
		return apiModule.search('customer',{
			'includeData':1,
			'dataLink':1,
			'customerIDs':[window.customerID]
		});
	}).then(function(c){
		console.log(c[0]);
		console.log(c[0]['dataLink']);
		console.log(c[0]['dataLink']['dataLink']);
	}).then(function(){
		/*return apiModule.call('customer','create',{
			'bulkEntities':[
				{
					'fname':'link',
					'lname':'blue',
					'dataLink':{'bulky':'create1'}
				},
				{
					'fname':'link',
					'lname':'shadow',
					'dataLink':{'bulky':'create2'}
				},
			]
		});*/
		return apiModule.call('note','create',{
			'bulkEntities':[
				{
					'customerID':window.customerID,
					'date':'2024-07-02',
					'contactType':0,
					'notes':'duly',
					'dataLink':{'bulky':'create1'}
				},
				{
					'customerID':window.customerID,
					'date':'2024-07-02',
					'contactType':0,
					'notes':'noted',
					'dataLink':{'bulky':'create2'}
				},
			]
		});

	}).then(function(r){
		return apiModule.search('note',{
			'includeData':1,
			'dataLink':1,
			'noteIDs':r.result.success
		});
	}).then(function(c){
		console.log(c[0]);
		console.log(c[0]['dataLink']);
		console.log(c[0]['dataLink']['dataLink']);
		console.log(c[1]);
		console.log(c[1]['dataLink']);
		console.log(c[1]['dataLink']['dataLink']);
	}).then(function(r){
		var lateCustomer;
		//create with no initial dataLink
		return apiModule.call('customer','create',{
			'fname':'bill',
			'lname':'pc'
		}).then(function(r){
			lateCustomer=r.result;
			return apiModule.search('customer',{
				'customerIDs':[lateCustomer],
				'includeData':1,
				'dataLink':1,
			});
		}).then(function(c){
			console.log(c[0]);
			console.log(c[0]['dataLink']?'dataLink present':'dataLink missing (expected)');

			return apiModule.call('customer','update',{
				'customerID':lateCustomer,
				'dataLink':{'late':'data'}
			});
		}).then(function(r){
			return apiModule.call('customer',lateCustomer,{'dataLink':1});
		}).then(function(c){
			console.log(c.customer);
			console.log(c.customer.dataLink);
			console.log(c.customer.dataLink.dataLink);
		});
	});
});
</code>