
<h3>Create a customer with a subscription (MVP)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe'
}).then(function(response){
	var customerID=response.result;
	return apiModule.call('subscription','create',{
		'customerID':customerID,
		'serviceID':1
	});
});
</code>


<h3>Create a customer with a subscription (common parameters)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe',
}).then(function(response){
	var customerID=response.result;
	return apiModule.call('subscription','create',{
		'customerID':customerID,
		'serviceID':1,
		'active':1,
		'soldBy':1,//employeeID
		'initalCharge':200, //amount charged on initial service
		'serviceCharge':100,//amount charged per service
		'agreementLength':12,//months
		'preferredDays':4,//Preferred appointment day (0-SUN, 1-MON, 2-TUE, 3-WED, 4-THU, 5-FRI, 6-SAT)
		'preferredStart':'09:00:00',//Preferred appointment time window start range in local time
		'preferredEnd':'17:00:00',
		'preferredTech':1,//employeeID -  0 for no preference
	});
});
</code>


<h3>Create a Lead</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe'
}).then(function(response){
	var customerID=response.result;
	return apiModule.call('subscription','create',){
		'customerID':customerID,
		'serviceID':1
	});
}).then(function(response){
	var subscriptionID=response.result;
	return apiModule.call('subscription','updateLeadStage',){
		'subscriptionID':subscriptionID,
		//'stageID':
		'status':0
	});
};
</code>





<h3>Create a subscription with a addons</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
'fname':'Test',
'lname':'Customer',
}).then(function(response){
	let customerID = response.result;

	return apiModule.call('subscription','create',{
		'customerID': customerID,
		'serviceID': 1,
		'initialCharge': '2000',
		'initialAddons':[
			{
				"description":  'Initial Discount',
				"quantity":     1,
				"amount":       -1000.01,
				"productID":    0,
				"serviceID":    0,
				"taxable":      1,
				"creditTo":     1,
				"unitID":       null
			}
		],
		'serviceCharge': '222.22',
		'addons':[
			{
				"description":  'Recurring Handling Fee',
				"quantity":     1,
				"amount":       1.08,
				"productID":    1,
				"serviceID":    0,
				"taxable":      1,
				"creditTo":     1,
				"unitID":       null
			}
		],
	});
}).then(function(r){
	return apiModule.get('subscription',[r.result]);
}).then(console.log);

</code>












