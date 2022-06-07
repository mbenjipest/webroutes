<h3>Get up to the minute documentation</h3>
<section>
	<p>Get the raw swagger documenation export from our servers.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>

apiModule.call('documentation','swagger',{});
//OR
//https://YOURDOMAIN.pestroutes.com/api/documentation/swagger?authenticationKey=xxx&authenticationToken=xxx
	</code>
</section>



<h3>Load a keyset</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.loadKeyset('demo',{
	"base_url":"https://stagingdemo.pestroutes.com",
	"keys":["xxx"],
	"tokens":["xxx"],
},1);
//apiModule.setKeyset('demo');
	</code>
</section>




<h3>Send a bunch of subscription updates staggered (from csv)</h3>
<section>
	<pre>
subscriptionID,officeID,duration
10006,1,30
10007,1,30
	</pre>
	<form id="csvForm">
		<input type="file" id="csvFile" accept=".csv" />
		<input type="submit" id="csvSubmit" value="Submit csv updates" style='display: none;'/>
	</form>
	<h4>workflow</h4>
	<button class='run'>Execute</button>
	<code>
let csvForm = document.getElementById("csvForm");
let csvFile = document.getElementById("csvFile");

csvForm.addEventListener("submit", function(e){
	e.preventDefault();
	let input = csvFile.files[0];
	let reader = new FileReader();

	//Set the load action for the csv file
	reader.onload = function(e){
		let rows = apiModule.csvToArray(e.target.result);
		//rows=rows.slice(0,1000);
		//rows.unshift({"subscriptionID":18,"officeID":1,"duration":30});
		return apiModule.staggeredWrite('subscription','update',rows,8)
		.then(function(r){
			console.log('bulk update results:');
			console.log(r);
			if(confirm('download result log?')){
				apiModule.downloadJSON(r);
			}
		});
	};
	//load the csv file
	reader.readAsText(input);
});

let csvSubmit = document.getElementById("csvSubmit");
csvSubmit.style.display = "block"
	</code>
</section>


<h3>Send a bunch of updates staggered</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
return; //delete me to run this crazy example

apiModule.search('subscription',{
	'includeData':1,
	'serviceID':1
})
.then(function(subscriptions){
	let updates=[];
	for(let i=0,l=subscriptions.length; i&lt;l;++i){
		updates.push({
			"subscriptionID":subscriptions[i]['subscriptionID'],
			"duration":30,
			"officeID":subscriptions[i]['officeID']
		});
	}
	return apiModule.staggeredWrite('subscription','update',updates,4);
}).then(console.log);
	</code>
</section>


<h3>Download all service types</h3>
<section>
	<p>Download all service types with a global key.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('serviceType',{
    "officeIDs":0, //[-1, (officeIDs>0)]
    "includeData":1
},1).then(apiModule.download);
	</code>
</section>

<h3>Download all customerIDs</h3>
<section>
	<p>Download all service types with a global key.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('customer',{
    "officeIDs":{"operator":">","value":"0"},
},1).then(apiModule.download);
	</code>
</section>

<h3>Download all customers fully resolved</h3>
<section>
	<p>Download all service types with a global key.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
return; //safety
apiModule.search('customer',{
    "officeIDs":{"operator":">","value":"0"},
    "includeData":1
},1).then(apiModule.download);
	</code>
</section>


<h3>test spot search</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('spot', {
	"date": {
		"operator":'IN',
		"value":[ "2020-09-25"],
	},
	//"routeIDs": [78, 79, 80, 81, 82],
	"apiCanSchedule": 1,
	"ignoreInitialDriveTime":1,
	"latitude":  33.130489,
	"longitude": -96.651377,
	"includeData":1
}).then(function(r){
	//console.table(r, ['distanceToClosest','distanceToPrevious','distanceToNext','open','start','end']);
});
	</code>
</section>

<h3>Stress test spots pragmatic</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('spot', {
	"date": {
		"operator":"BETWEEN",
		"value":[
			"2021-03-01",
			"2021-03-31"
		]
	},
	"routeIDs":166,
	"apiCanSchedule": 1,
	"latitude":  33.130489,
	"longitude": -96.661377,
	"includeData":1,
	//"open":1
}).then(function(spots){
	for(var i=0,l=spots.length;i&lt;l;++i){
		apiModule.get('spot',[spots[i]['spotID']]);
	}
});
	</code>
</section>


<h3>Create a bunch of appointments for random customers</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
var testRouteID=107;

apiModule.search('subscription',{
	'includeData':1,
	'status':1
}).then(function(subscriptions){
	apiModule.shuffle(subscriptions);
	var testSubscriptions=subscriptions.slice(0,10);

	for(var i=0,l=testSubscriptions.length;i&lt;l;++i){
		let start = Math.floor(Math.random() * 6) + 9; //9am-3pm
		let end = Math.floor(Math.random() * 4) + 2 + start; //+2-6 hours later

		//start=9;
		//end=17;
		apiModule.call('appointment','create',{
			"customerID":     testSubscriptions[i]['customerID'],
			"subscriptionID": testSubscriptions[i]['subscriptionID'],
			"type":           testSubscriptions[i]['serviceID'],
			"duration":       Math.random()>.5?59:29,
			"notes":          'Api Created Appointment',
			"spotID":         0,

			'start':          (start<10?'0'+start:start)+':00:00',
			'end':            (end<10?'0'+end:end)+':00:00',
			'routeID':        testRouteID,
			"employeeID":     1
		});
	}
});
	</code>
</section>

<h3>create a ticket with items</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.call('ticket', 'create',{
	"customerID":		130,
	"serviceID":		1,

	"date":				"2020-09-16",
	"billToAccountID":	0,
	"serviceCharge":	69.96,
	"additionalNotes":	'API TESTING',
	"addons":[
		{
			"description":	'discount',
			"quantity":		1,
			"amount":		-1.99,
			"productID":	0,
			"serviceID":	0,
			"taxable":		1,
			"creditTo":		1,
			"unitID":		null
		},
		{
			"description":	'Addon item',
			"quantity":		1,
			"amount":		2.99,
			"productID":	1,
			"serviceID":	0,
			"taxable":		1,
			"creditTo":		1,
			"unitID":		null
		}
	]
});

	</code>
</section>

<h3>Efficiently find the best route and spot for a location</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>

var customerLatitude  ='33.13'+Math.ceil(Math.random()*100);
var customerLongitude='-96.66'+Math.ceil(Math.random()*100); //'-83.86'
var dateFilter={
	'operator':'between',
	'value':['2020-09-24','2020-09-30']
};

apiModule.search('route',{
	'date':dateFilter,
	'latitude':customerLatitude,
	'longitude':customerLongitude,
	//'maxDistance':500,
	'apiCanSchedule':1,
	'includeData':1
}).then(function(routes){
	//Sort by averageDistance ASC
	routes.sort(function(a, b){
		//empty routes to the bottom
		if(a.averageDistance===b.averageDistance){
			return 0;
		}else if(a.averageDistance===null){
			return 1;
		}else if(b.averageDistance===null){
			return -1;
		}
		return (parseFloat(a.averageDistance) > parseFloat(b.averageDistance)) ? 1 : -1;
	});

	console.log(routes.map( r=>r.averageDistance) );

	//Take only the first 10 routeIDs
	var routeIDs = routes.splice(0,10).map( r => r.routeID );

	return apiModule.search('spot',{
		'routeIDs':routeIDs,
		'date':dateFilter,
		'latitude':customerLatitude,
		'longitude':customerLongitude,
		'apiCanSchedule':1,
		'ignoreInitialDriveTime':1, // with this filter once a route has any appointment on it the start and end location of the technician will no longer be considered
		'includeData':1
	}).then(function(spots){
		for(let i=0,l=spots.length;i&lt;l;++i){

			//**if you need to accomodate appointments longer than the capacity of a spot more logic is necessary!
			if(spots[i].open&spots[i].apiCanSchedule){
				return spots[i];
			}
		}

		//fallback: search the remaining routes
		return apiModule.search('spot',{
			'routeIDs':routes.map( r => r.routeID ),
			'date':dateFilter,
			'latitude':customerLatitude,
			'longitude':customerLongitude,
			'apiCanSchedule':1,
			'ignoreInitialDriveTime':1,
			'includeData':1
		}).then(function(spots){
			for(let i=0,l=spots.length;i&lt;l;++i){
				if(spots[i].open&spots[i].apiCanSchedule){
					return spots[i];
				}
			}
			return 'could not find spot!';
		});
	});
}).then(console.log);



	</code>
</section>

<h3>create a payment profile for a random customer with element</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('customer',{
	'includeData':1
}).then(function(customers){
	apiModule.call('customer', 'createPaymentProfile', {
		'customerID': customers[0]['customerID'],
		'billingAddress1': customers[0]['address'],
		'billingCity': customers[0]['city'],
		'billingState': customers[0]['state'],
		'billingZip': customers[0]['zip'],
		'billingCountryID':'US',

		"CreditCardToken":'F33F5BB8-142A-4AC8-BD39-1CD523C7A059',
		//"CreditCardTokenID":"144531766", //NMI customer_vault_id can send repeatedly
	});
});
	</code>
</section>





<h3>Get all customers that prefer paper</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('customerFlag',{
	'customerFlags':'prefersPaper',
	'includeData':1
});
	</code>
</section>

<h3>Scheduling an appointment to an ideal spot</h3>
<section>
	<p>This workflow will create a customer (with a subscription and a payment profile) if it doesn't already exist, schedule an appointment if it's needed, then charge the customer through PestRoutes.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
var data={};
apiModule.search('customer',{
	'customerIDs':20303,
	'includeData':1
}).then(function( customers ){
	data.customer=customers[0];
	data.subscriptionIDs=data.customer.subscriptionIDs.split(',');
	let latestSubscriptionID=data.subscriptionIDs[data.subscriptionIDs.length-1];
	
	//retrieve the subscription
	return apiModule.get('subscription',[latestSubscriptionID]);
}).then(function( subscriptions ){
	data.subscription=subscriptions[0];

	//Check for pending appointments
	return apiModule.search('appointment',{
		'subscriptionIDs': data.subscription['subscriptionID'],
		'status':0
	});
}).then(function( appointments ){

	//Bail out if there is already a pending appointment
	if(false&&appointments.length>0){
		return Promise.reject('Pending appointment exists!');
	}

	//Get the spots for next Monday or Tuesday
	return apiModule.search('spot', {
		"date": {
			"operator":"BETWEEN",
			"value":[
				"2020-08-03",
				"2020-08-04"
			]
		},
		"apiCanSchedule": 1,
		"latitude":  data.customer.lat, //33.130489,
		"longitude": data.customer.lng, //-96.661377,
		"includeData":1
	});
}).then(function( spots ){
	
	//console.table(spots);
	//The spots come back ordered by the distance from the tech's previous location (last customer, employee endpoint, or office location), the first open spot should be fine
	let chosenSpot=false;
	for( var i=0, l=spots.length; i&lt;l; ++i){
		if(spots[i]['open']==1){
			chosenSpot=spots[i];
			break;
		}
	}

	//Note that if the duration of the appointment is greater than 'spotCapacity' nextSpotID should be checked for openness until full duration is accomodated

	return chosenSpot;
}).then(function( spot ){

	//create the appointment
	return apiModule.call('appointment','create',{
		"customerID":     data.customer['customerID'],
		"type":           data.subscription['serviceID'],
		"duration":       29,
		"notes":          'Api Created Appointment',
		"spotID":         spot['spotID'],
		"subscriptionID": data.subscription['subscriptionID'],
		"employeeID":     1
	});
}).then(function( createResult ){
	let appointmentID = createResult['success']==true? createResult['result'] : false;

	if(appointmentID===false){
		return Promise.reject('Failed to create appointment!');
	}

	return Promise.resolve('Appointment created!');

}).then(console.log, console.error);
	</code>
</section>

<h3>Scheduling and rescheduling an appointment for a known customer.</h3>
<section>
	<p>This workflow will find an ideal spot for a customer, then reschedule that customer.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
var data={};
apiModule.search('customer',{
	'customerIDs':20303,
	'includeData':1
}).then(function( customers ){
	data.customer=customers[0];
	data.subscriptionIDs=data.customer.subscriptionIDs.split(',');
	let latestSubscriptionID=data.subscriptionIDs[data.subscriptionIDs.length-1];
	
	//retrieve the subscription
	return apiModule.get('subscription',[latestSubscriptionID]);
}).then(function( subscriptions ){
	data.subscription=subscriptions[0];

}).then(function( appointments ){

	//Get the spots for next Monday or Tuesday
	return apiModule.search('spot', {
		"date": {
			"operator":"BETWEEN",
			"value":[
				"2020-07-20",
				"2020-07-21"
			]
		},
		"apiCanSchedule": 1,
		"latitude":  data.customer.lat, //33.130489,
		"longitude": data.customer.lng, //-96.661377,
		"includeData":1
	});
}).then(function( spots ){
	//console.table(spots);
	//The spots come back ordered by the distance from the tech's previous location (last customer, employee endpoint, or office location), the first open spot should be fine
	let chosenSpot=false;
	for( var i=0, l=spots.length; i&lt;l; ++i){
		if(spots[i]['open']==1){
			chosenSpot=spots[i];
			break;
		}
	}

	//Note that if the duration of the appointment is greater than 'spotCapacity' nextSpotID should be checked for openness until full duration is accomodated

	return chosenSpot;
}).then(function( spot ){

	//create the appointment
	return apiModule.call('appointment','create',{
		"customerID":     data.customer['customerID'],
		"type":           data.subscription['serviceID'],
		"duration":       14,
		"notes":          'Api Created Appointment',
		"spotID":         spot['spotID'],
		"subscriptionID": data.subscription['subscriptionID']
	});
}).then(function( createResult ){
	data.appointmentID = createResult['success']==true? createResult['result'] : false;

	//Get the new spot for WED/THUR
	return apiModule.search('spot', {
		"date": {
			"operator":"BETWEEN",
			"value":[
				"2020-07-22",
				"2020-07-23"
			]
		},
		"apiCanSchedule": 1,
		"latitude":  data.customer.lat, //33.130489,
		"longitude": data.customer.lng, //-96.661377,
		"includeData":1
	});
}).then(function( spots ){
	//console.table(spots);
	//The spots come back ordered by the distance from the tech's previous location (last customer, employee endpoint, or office location), the first open spot should be fine
	let chosenSpot=false;
	for( var i=0, l=spots.length; i&lt;l; ++i){
		if(spots[i]['open']==1){
			chosenSpot=spots[i];
			break;
		}
	}

	//Note that if the duration of the appointment is greater than 'spotCapacity' nextSpotID should be checked for openness until full duration is accomodated

	return chosenSpot;
}).then(function( spot ){
	if(data.appointmentID===false){
		return Promise.reject('Failed to update appointment!');
	}

	return apiModule.call('appointment','update',{
		'appointmentID':  data.appointmentID,
		"customerID":     data.customer['customerID'],
		"type":           data.subscription['serviceID'],
		"duration":       14,
		"notes":          'Api UPDATED Appointment',
		"spotID":         spot['spotID'],
		"subscriptionID": data.subscription['subscriptionID']
	});

})
.then(console.log, console.error);
	</code>
</section>


<h3>Updating a customer via import/main safely</h3>
<section>
	<p>First, read the current state of the customer from the customer/get endpoint then maps those values to the import/main field names, modifies reminder preferences to off, then sends to import/main for update.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.selectCustomersForUpdate([20301])
.then(function(customers){

	//Turn off reminders for the customer
	customers[0]['PhoneReminders']=0;
	customers[0]['SmsReminders']=0;
	customers[0]['EmailReminders']=0;

	//Write the customer
	return apiModule.call('import','main',{
		"dataMain": customers
	});
})
.then(console.log);
	</code>
</section>

<h3>Sync all products</h3>
<section>
	<p></p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
var products = [
	{
		"productID": "1",
		"officeID": "1",
		"description": "WE CHANGED THIS DESCRIPTION",
		"amount": "-50.00",
		"taxable": "1",
		"code": "COUPON ",
		"category": "COUPONS",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "0"
	},
	{
		"productID": "2",
		"officeID": "1",
		"description": "Cancellation Fee",
		"amount": "100.00",
		"taxable": "0",
		"code": "EFT",
		"category": "ADMIN",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "0"
	},
	{
		"productID": "6",
		"officeID": "1",
		"description": "MOTH FOG",
		"amount": "25.00",
		"taxable": "1",
		"code": "MOTH",
		"category": "MOTH",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "1"
	},
	{
		"productID": "8",
		"officeID": "1",
		"description": "Candy Party",
		"amount": "5000.00",
		"taxable": "1",
		"code": "CANDY",
		"category": "PARTY",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "0"
	},
	{
		"productID": false,
		"officeID": "-1",
		"description": "This is a new one",
		"amount": "100.00",
		"taxable": "1",
		"code": "MASTER",
		"category": "RO",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "0"
	},
	{
		"productID": false,
		"officeID": "-1",
		"description": "This is another new one",
		"amount": "101.00",
		"taxable": "1",
		"code": "DOCTOR",
		"category": "DR",
		"visible": "1",
		"salesVisible": "1",
		"recurring": "0"
	}
];

//get all PR product IDs
apiModule.search('product',{})
.then(function(productIDs){
	//Resolve productIDs to entities in groups of 1000
	return apiModule.staggeredRequest('product', productIDs);
})
.then(function(prProducts){
	
	//Index remote products on code field
	var indexedProducts = {};
	for(var i=0,l=prProducts.length; i&lt;l; ++i){
		if(prProducts[i]['code']==''){ //Warn on entries with no code
			console.error('product missing code', prProducts[i]);
		} else if(typeof indexedProducts[ prProducts[i]['code'] ] !== 'undefined'){ //Warn on duplicates
			console.error('Duplicate product code: ' + prProducts[i]['code'], prProducts[i]);
		} else {
			indexedProducts[ prProducts[i]['code'] ]=prProducts[i];
		}
	}

	var creates = [];
	var updates = [];
	//compare local list against remote list
	for(var i=0,l=products.length; i&lt;l; ++i){
		if( typeof indexedProducts[ products[i]['code'] ] === 'undefined'
			&& indexedProducts[ products[i]['code'] ] != ''
		){
			creates.push(products[i]);
			continue;
		}

		let remote = indexedProducts[products[i]['code']];
		if(
			   products[i]['description']!=  remote['description']
			|| products[i]['amount']!=       remote['amount']
			|| products[i]['taxable']!=      remote['taxable']
			|| products[i]['category']!=     remote['category']
			|| products[i]['visible']!=      remote['visible']
			|| products[i]['salesVisible']!= remote['salesVisible']
			|| products[i]['recurring']!=    remote['recurring']
		){
			updates.push({
				'productID': remote['productID'],
				'description': products[i]['description'],
				'amount': products[i]['amount'],
				'taxable': products[i]['taxable'],
				'category': products[i]['category'],
				'visible': products[i]['visible'],
				'salesVisible': products[i]['salesVisible'],
				'recurring': products[i]['recurring']
			});
		}
	}


	function createProducts(newProducts){
		var currentProduct = newProducts.shift();
		apiModule.call('product','create',{
			"officeID":      currentProduct['officeID'],
			"description":   currentProduct['description'],
			"amount":        currentProduct['amount'],
			"taxable":       currentProduct['taxable'],
			"code":          currentProduct['code'],
			"category":      currentProduct['category'],
			"visible":       currentProduct['visible'],
			"salesVisible":  currentProduct['salesVisible'],
			"recurring":     currentProduct['recurring']
		}).then(function(response){
			//Save created productID if you want
			console.log(response.result);

			//Recurse while not empty
			if(newProducts.length>0){
				createProducts(newProducts);
			}

		});
	}

	//Do the create calls
	if(creates.length>0){
		createProducts(creates);
	}


	function updateProducts(changedProducts){
		var currentProduct = changedProducts.shift();
		apiModule.call('product','update',currentProduct)
		.then(function(response){
			//Recurse while not empty
			if(changedProducts.length>0){
				updateProducts(changedProducts);
			}

		});
	}
	//Do the update calls
	if(updates.length>0){
		updateProducts(updates);
	}
});
	</code>
</section>


<section>
	<p>Ping for reachability every 5 minutes</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
function sleep(ms){ return new Promise(resolve => setTimeout(resolve, ms)); }
async function applesauce(){ await sleep(5*60*1000); return apiModule.search('customer',{}).then(function(r){ alert('success!');console.log(r); }, applesauce); } applesauce();
	</code>
</section>

<h3>Big Workflow</h3>
<section>
	<p>This workflow will create a customer (with a subscription and a payment profile) if it doesn't already exist, schedule an appointment if it's needed, then charge the customer through PestRoutes.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>

//Build our test data
var data = {};
var sampleCustomer={
	//Customer Infomation
	"CustomerID":      "CleanTest0020",     //Your primary key, iterate to repeat test
	"Branch":          "Demo Pest Control", 
	"CustomerName":    "Liberty Burger",
	"CustomerAddress": "824 W Stacy Rd",
	"CustomerCity":    "Allen",
	"CustomerState":   "TX",
	"CustomerZipCode": "75013",
	"CustomerPhone1":  "1118675309",
	"CustomerPhone2":  "5558675309",
	"CustomerEmail":    "",
	"CustomerStatus":   "Act",

	//NMI token
	//"CreditCardToken":"n43k4enf-mcJEHj-4BG9WJ-EggA4286Qf27", //These are one-time use! We convert it to a customer_vault_id and store
	//"CreditCardTokenID":"144531766", //NMI customer_vault_id can send repeatedly

	//Element
	//"CreditCardToken":'F33F5BB8-142A-4AC8-BD39-1CD523C7A059',

	//Braintree
	//"CreditCardTokenID":'7qf8yk',
	//"CreditCardToken":'506160933',


	//Subscription information - Will always CREATE a subscription if set
	"Frequency": 90, 				//These three fields
	"ServiceType": 'API Quarterly', // are the minimum to
	"Price": '200',					// create a subscription


	//"Lead": 'No',					//Set Yes to create subscription as a LEAD
	//"LastService": '4/26/18',		// If this is set it will override Lead to No
	//"InitialService": '1/26/18',	// If this is set it will override Lead to No
};

//First, let's see if the customer exists based on our external primary key
apiModule.search('customer',{
	'customerLink':sampleCustomer['CustomerID'],
	'includeData':1
}).then(function( customers ){
	
	//Return true if the customer exists
	if( customers.length>0 ){
		data.customer=customers[0];
		data.subscriptionIDs=data.customer.subscriptionIDs.split(',');
		return Promise.resolve(true);
	}

	//create the customer if it doesn't exist
	return apiModule.call('import','main',{
		"dataMain":[sampleCustomer]
	});
}).then(function( importResult ){

	//We can skip this step; the customer was found in step 1
	if( importResult===true ){
		return Promise.resolve(true);
	}

	//Detect import error
	if(
		importResult['success']==0
		|| importResult['customersImported'].length==0
	){
		alert('failed to import customer');
	}

	let customerID = importResult['customersImported'][0]['PestRoutesCustomerID'];

	//retrieve the customer (includes nested subscriptionIDs)
	return apiModule.get('customer',[customerID]);
}).then(function( customers ){

	//store the new data if we did the create operation
	if( customers!==true ){
		data.customer=customers[0];
		data.subscriptionIDs=data.customer.subscriptionIDs.split(',');
	}

	let latestSubscriptionID=data.subscriptionIDs[data.subscriptionIDs.length-1];
	
	//retrieve the subscription
	return apiModule.get('subscription',[latestSubscriptionID]);
}).then(function( subscriptions ){

	data.subscription=subscriptions[0];

	//check if the subscription is due for service
	let currentDate = (new Date()).toISOString().substring(0,10);
	let serviceDue = data.subscription['nextService']<=currentDate;

	if(!serviceDue){
		return Promise.reject('Service is not due for the subscription!');
	}



	//create a paymentProfile
	return apiModule.call('customer', 'createPaymentProfile', {
		'customerID': data.customer['customerID'],
		'billingAddress1': data.customer['address'],
		'billingCity': data.customer['city'],
		'billingState': data.customer['state'],
		'billingZip': data.customer['zip'],
		'billingCountryID':'US',
		
		"CreditCardToken":"n43k4enf-mcJEHj-4BG9WJ-EggA4286Qf27", //These are one-time use! We convert it to a customer_vault_id and store
		//"CreditCardTokenID":"144531766", //NMI customer_vault_id can send repeatedly
	});
}).then(function( paymentProfileCreated ){

	//Get customer to check the customer last4 etc...
	return apiModule.get('customer',[ data.customer['customerID'] ]);
}).then(function( customers ){
	data.customer=customers[0];
	console.log(data.customer);


	//check if there is alredy a pending appointment for that subscription
	return apiModule.search('appointment',{
		'subscriptionIDs': data.subscription['subscriptionID'],
		'status':0
	});
}).then(function( appointments ){

	//Bail out if there is already a pending appointment
	if(appointments.length>0){
		return Promise.reject('Pending appointment exists!');
	}

	//Get the spots for next Monday or Tuesday
	return apiModule.search('spot', {
		"date": {
			"operator":"BETWEEN",
			"value":[
				"2019-10-08",
				"2019-10-09"
			]
		},
		"apiCanSchedule": 1,
		"latitude":  33.130489,
		"longitude":-96.661377,
		"includeData":1
	});
}).then(function( spots ){
	
	//console.table(spots);
	//The spots come back ordered by the distance from the tech's previous location (last customer, employee endpoint, or office location) , the first open spot should be fine
	let chosenSpot=false;
	for( var i=0, l=spots.length; i&lt;l; ++i){
		if(spots[i]['open']==1){
			chosenSpot=spots[i];
			break;
		}
	}

	//Note that if the duration of the appointment is greater than 'spotCapacity' nextSpotID should be checked for openness until full duration is accomodated

	return chosenSpot;
}).then(function( spot ){

	//create the appointment
	return apiModule.call('appointment','create',{
		"customerID":     data.customer['customerID'],
		"type":           data.subscription['serviceID'],
		"duration":       14,
		"notes":          'Api Created Appointment',
		"spotID":         spot['spotID'],
		"subscriptionID": data.subscription['subscriptionID']
	});
}).then(function( createResult ){
	let appointmentID = createResult['success']==true? createResult['result'] : false;

	if(appointmentID===false){
		return Promise.reject('Failed to create appointment!');
	}

	//create a payment for the customer, charge the card on file
	return apiModule.call('payment','create',{
		"customerID":data.customer['customerID'],
		"amount": 100,
		"notes":'API generated payment',
		"paymentMethod":3, // 0-Coupon, 1-Cash, 2-Check, 3-Credit Card, 4 ACH
		
		//Optionally charge the card/ACH on file through PestRoutes
		'doCharge': 1,

		//Optionally limit the payment to the subscription
		'subscriptionID':data.subscription['subscriptionID']
	});
}).then(function( paymentResult ){

	if(paymentResult['success']==true){
		return Promise.resolve('Payment Created');
	}else{
		return Promise.reject(paymentResult['errorMessage']);
	}

}).then(console.log, console.error);

	</code>
</section>

<h2 style='margin-top:10em;'>Generic examples follow</h2>
<hr>




<h3>Create a customer</h3>
<section>
	<p>To create a customer use the import/main endpoint. Subsequent requests with the same 'CustomerID' property will perform a set operation, updating the matched entity to the data sent. Here we'll use 'PestRoutesTesting1234'. This is a fantasy, so we'll be servicing Disney World in this demo.

	Full list of import/main parameters here: https://pestroutes.api-docs.io/3.1/import/importmainobject</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.call('import','main',{
	"dataMain":[
		{
			"CustomerID": "PestRoutesTesting1234",
			"Branch": "Demo Pest Control",
			"CustomerName": "PestRoutes Testing01",
			"CustomerAddress": "Walt Disney World Resort, Orlando, FL 32830",
			"CustomerCity": "Orlando",
			"CustomerState": "FL",
			"CustomerZipCode": "32830",
			"CustomerPhone1": "4428675309",
			"CustomerPhone2": "4438675309",
			"CustomerEmail": "",
			"CustomerStatus": "Act"

			//"Frequency": 90, 				//These three fields
			//"ServiceType": 'Quarterly',	// are the minimum to
			//"Price": '111',				// create a subscription

			//"Lead": 'No',					//Set Yes to revert subscription to a LEAD
			//"LastService": '4/26/18',		// If this is set it will override Lead to No
			//"InitialService": '1/26/18',	// If this is set it will override Lead to No
		}
	]
});
	</code>

	<h4>JQuery</h4>
	<code class='closed'>
$.post("https://demo.pestroutes.com/api/import/main",
{
	"authenticationKey": "xxx",
	"authenticationToken": "xxx",
	"dataMain":[
		{
			"CustomerID": "PestRoutesTesting1234",
			"Branch": "Demo Pest Control",
			"CustomerName": "PestRoutes Testing01",
			"CustomerAddress": "Walt Disney World Resort, Orlando, FL 32830",
			"CustomerCity": "Orlando",
			"CustomerState": "FL",
			"CustomerZipCode": "32830",
			"CustomerPhone1": "4428675309",
			"CustomerPhone2": "4438675309",
			"CustomerEmail": "",
			"CustomerStatus": "Act"
		}
	]
}, function(response){
	console.log(response);
},"JSON");
	</code>

	<h4>CURL</h4>
	<code class='closed'>
curl 'https://demo.pestroutes.com/api/import/main' -H 'Accept: application/json, text/javascript, */*; q=0.01'-H 'Sec-Fetch-Mode: cors' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'dataMain%5B0%5D%5BCustomerID%5D=PestRoutesTesting1234&dataMain%5B0%5D%5BBranch%5D=Demo+Pest+Control&dataMain%5B0%5D%5BCustomerName%5D=PestRoutes+Testing01&dataMain%5B0%5D%5BCustomerAddress%5D=Walt+Disney+World+Resort%2C+Orlando%2C+FL+32830&dataMain%5B0%5D%5BCustomerCity%5D=Orlando&dataMain%5B0%5D%5BCustomerState%5D=FL&dataMain%5B0%5D%5BCustomerZipCode%5D=32830&dataMain%5B0%5D%5BCustomerPhone1%5D=4428675309&dataMain%5B0%5D%5BCustomerPhone2%5D=4438675309&dataMain%5B0%5D%5BCustomerEmail%5D=&dataMain%5B0%5D%5BCustomerStatus%5D=INA&authenticationKey=xxx&authenticationToken=xxx' --compressed
	</code>

	<h4>Result</h4>
	<code class='closed'>
{
	"params": {
		"endpoint": "import",
		"action": "main",
		"dataMain": [],
		"authenticationKey": "xxx",
		"authenticationToken": "xxx"
	},
	"requestAction": "main",
	"endpoint": "import",
	"success": true,
	"customersImported": [
		{
			"CustomerID": "PestRoutesTesting1234",
			"PestRoutesCustomerID": "21044",
			"Action": "Created"
		}
	],
	"processingTime": "899 milliseconds",
	"count": 0
}
//Subsequent requests:
{
	"params": {
		"endpoint": "import",
		"action": "main",
		"dataMain": [],
		"authenticationKey": "xxx",
		"authenticationToken": "xxx"
	},
	"requestAction": "main",
	"endpoint": "import",
	"success": true,
	"customersImported": [
		{
			"CustomerID": "PestRoutesTesting1234",
			"PestRoutesCustomerID": "21044",
			"Action": "Updated"
		}
	],
	"processingTime": "808 milliseconds",
	"count": 0
}
	</code>
</section>



<h3>Search for customers</h3>
<section>
	<p>Search for customer by by dateUpdated</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('customer',{
	"dateUpdated":{
		"operator":">",
		"value":"2019-09-27 00:00:00"
	}
}).then(console.log);
	</code>

	<h4>JQuery</h4>
	<code class='closed'>
$.post("https://demo.pestroutes.com/api/customer/search",
{
	"authenticationKey": "xxx",
	"authenticationToken": "xxx",
	"dateUpdated":{
		"operator":">",
		"value":"2019-09-27 00:00:00"
	}
}, function(response){
	console.log(response);
},"JSON");
	</code>

	<h4>CURL</h4>
	<code class='closed'>
curl 'https://demo.pestroutes.com/api/customer/search' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Sec-Fetch-Mode: cors' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'dateUpdated%5Boperator%5D=%3E&dateUpdated%5Bvalue%5D=2019-09-27+00%3A00%3A00&authenticationKey=xxx&authenticationToken=xxx' --compressed
	</code>

	<h4>Result</h4>
	<code class='closed'>
{
	"params": {
		"endpoint": "customer",
		"action": "search",
		"dateUpdated": {
			"operator": ">",
			"value": "2019-09-27 00:00:00"
		},
		"authenticationKey": "xxx",
		"authenticationToken": "xxx"
	},
	"requestAction": "search",
	"endpoint": "customer",
	"success": true,
	"idName": "customerIDs",
	"processingTime": "53 milliseconds",
	"count": 2,
	"customerIDs": [
		12,
		14
	],
	"propertyName": "customerIDs"
}
	</code>
</section>



<h3>Resolve customerIDs</h3>
<section>
	<p>Get full objects for the given customerIDs</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.get('customer',[12,14]).then(console.log);
	</code>

	<h4>JQuery</h4>
	<code class='closed'>
$.post("https://demo.pestroutes.com/api/customer/get",
{
	"authenticationKey": "xxx",
	"authenticationToken": "xxx",
	"customerIDs":[12,14]
}, function(response){
	console.log(response);
},"JSON");
	</code>

	<h4>CURL</h4>
	<code class='closed'>
curl 'https://demo.pestroutes.com/api/customer/get' -H 'Accept: application/json, text/javascript, */*; q=0.01' -H 'Sec-Fetch-Mode: cors' -H 'Content-Type: application/x-www-form-urlencoded; charset=UTF-8' --data 'customerIDs%5B%5D=12&authenticationKey=xxx&authenticationToken=xxx' --compressed
	</code>

	<h4>Result</h4>
	<code class='closed'>
{
	"params": {
		"endpoint": "customer",
		"action": "get",
		"customerIDs": [
			"12",
			"14"
		],
		"authenticationKey": "xxx",
		"authenticationToken": "xxx"
	},
	"requestAction": "get",
	"endpoint": "customer",
	"success": true,
	"processingTime": "31 milliseconds",
	"count": 2,
	"customers": [
		{
			"customerID": "12",
			"billToAccountID": "12",
			"officeID": "1",
			"fname": "Jane",
			"lname": "Smith",
			"companyName": "",
			"spouse": null,
			"commercialAccount": "0",
			"status": "1",
			"statusText": "Active",
			"email": "ivanner@pestroutes.com",
			"phone1": "",
			"phone2": "1",
			"address": "22676  Edinburgh Ln",
			"city": "WASHINGTON TOWNSHIP",
			"state": "MI",
			"zip": "48095",
			"billingCompanyName": "",
			"billingFName": "Jane",
			"billingLName": "Smith",
			"billingCountryID": "US",
			"billingAddress": "22676  Edinburgh Ln",
			"billingCity": "McKinney",
			"billingState": "TX",
			"billingZip": "75069",
			"billingPhone": "",
			"billingEmail": "ivanner@pestroutes.com",
			"lat": "55.953251",
			"lng": "-3.188267",
			"squareFeet": "0",
			"addedByID": "61",
			"dateAdded": "2012-08-31 20:17:00",
			"dateCancelled": "0000-00-00 00:00:00",
			"dateUpdated": "2019-09-27 11:29:06",
			"sourceID": "1",
			"source": "Door to Door",
			"aPay": "CC",
			"preferredTechID": "0",
			"paidInFull": "0",
			"subscriptionIDs": "10338",
			"balance": "0.00",
			"balanceAge": "0",
			"responsibleBalance": "-1167.25",
			"responsibleBalanceAge": "0",
			"customerLink": "0",
			"masterAccount": "0",
			"preferredBillingDate": "0",
			"paymentHoldDate": "2019-08-07 13:09:40",
			"mostRecentCreditCardLastFour": null,
			"mostRecentCreditCardExpirationDate": null,
			"appointmentIDs": "12,5465,6213,7825,8020,8044,8394,8547,8595,8895,9251,9662,10187,10369,10399,22798,22911,22918,22925,23592,23627,24075,24173,30014",
			"ticketIDs": "1341,1575,2371,38855",
			"paymentIDs": "4037,5790,12091,12092",
			"unitIDs": []
		},
		{
			"customerID": "14",
			"billToAccountID": "14",
			"officeID": "1",
			"fname": "John",
			"lname": "Johnsons",
			"companyName": "",
			"spouse": null,
			"commercialAccount": "0",
			"status": "1",
			"statusText": "Active",
			"email": "davinggg@hotmail.com",
			"phone1": "2312312341",
			"phone2": "1",
			"address": "63287  Worchester Lan",
			"city": "wylie",
			"state": "TX",
			"zip": "75098",
			"billingCompanyName": "",
			"billingFName": "John",
			"billingLName": "Johnsons",
			"billingCountryID": "US",
			"billingAddress": "63287  Worchester Lan",
			"billingCity": "wylie",
			"billingState": "TX",
			"billingZip": "75098",
			"billingPhone": "2312312341",
			"billingEmail": "davinggg@hotmail.com",
			"lat": "33.254177",
			"lng": "-111.555054",
			"squareFeet": "0",
			"addedByID": "50",
			"dateAdded": "2012-08-31 20:16:00",
			"dateCancelled": "0000-00-00 00:00:00",
			"dateUpdated": "2019-09-27 11:29:18",
			"sourceID": "1",
			"source": "Door to Door",
			"aPay": "CC",
			"preferredTechID": "0",
			"paidInFull": "0",
			"subscriptionIDs": "9097",
			"balance": "0.00",
			"balanceAge": "0",
			"responsibleBalance": "-434.96",
			"responsibleBalanceAge": "0",
			"customerLink": "",
			"masterAccount": "6196",
			"preferredBillingDate": "0",
			"paymentHoldDate": "2018-10-11 00:00:00",
			"mostRecentCreditCardLastFour": null,
			"mostRecentCreditCardExpirationDate": null,
			"appointmentIDs": "14,6215,9768,9806,10280,10339,11018,11547,11576,13562,13563,13564,14801,17258,20037,22368,22371,24171,26130,26135,26138,26712,26794,28042,28547,29083,29592,30312,31984,32268,32367,33385",
			"ticketIDs": "2486,15924,17997,18001,18002,18003,18004,18075,21503,27982,29301,38848",
			"paymentIDs": "1927,2157,2159,7155,10233,11288,11782,11792,11794",
			"unitIDs": []
		}
	],
	"propertyName": "customers"
}
	</code>
</section>


<h3>Payment Profile</h3>
<section>
	<p>Stand alone payment profile creation</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.call('customer','createPaymentProfile',{
	"customerID":21049,
	"billingAddress1":"Updated Billing Address",
	"billingCity":"Updated Billing City",
	"billingState":"UT",
	"billingZip":"84401",
	"billingCountryID":"US",

	//NMI
	//"CreditCardTokenID": '170925044'

	//Element
	"CreditCardToken":'F33F5BB8-142A-4AC8-BD39-1CD523C7A059'

	//Braintree
	//"CreditCardTokenID":'7qf8yk',
	//"CreditCardToken":'506160933'
});
	</code>
</section>


<h3>Search for a lot of customers and resolve</h3>
<section>
	<p>The 'get' endpoint limits the number of results to 1000 entities at a time. The search endpoint returns a maximum of 50,000 IDs at a time. This demo document includes a function 'apiModule.staggeredRequest' that will resolve entity data in groups of 1000 while capping concurrent requests at 4. The function 'apiModule.search' demonstrates the logic necessary to resolve requests with subsequent searchs by adding the filter for primaryID > last ID from previous request.</p>
	<h4>Example</h4>
	<button class='run'>Execute</button>
	<code>
apiModule.search('customer',{
	'dateAdded':{
		'operator':'BETWEEN',
		'value':[
			'2010-01-01','2016-01-01'
		]
	},
})
.then(function(result){
	return apiModule.staggeredRequest('customer', result);
})
.then(console.log);
	</code>
</section>

<!--
let xhr = new XMLHttpRequest();
var theUrl = "/json-handler";
xhr.open("POST", 'https://michaelb.pestroutes.com/api/customer/search');
xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhr.send(JSON.stringify({
	'dateUpdated':{
		'operator':'>',
		'value':'2021-01-01'
	},
	'authenticationKey'  :'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
	'authenticationToken':'1111111111111111111111111111111111111111111111111111111111111111'
}));

xhr.onreadystatechange = function() {
	if(this.readyState == 4 && this.status == 200){
		result = JSON.parse(this.responseText);
		console.log(result);
	}
};
-->