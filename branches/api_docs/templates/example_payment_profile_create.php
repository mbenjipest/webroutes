<strong><p>Confirm payment gateway with office administrator - profiles created for inactive gateways may be inaccessable and unusable!</p></strong>

<h3>Create an ACH payment profile</h3>
<button class='run'>Execute</button>
<code class='example_code'>
//paymentProfile/create ACH
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman'
}).then(function(customer){
	var customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID,
		"autopay":1,
		"billingAddress1": "5001 Quorum Dr",
		"billingCity": "Addison",
		"billingState": "TX",
		"billingZip": "75001",
		"billingCountryID": "US",
		"paymentMethod": "2", //1:cc, 2:ach
		"accountNumber": "0000001",
		"routingNumber": "111900659",
		"gateway": "payrix",//ACH gateway E.G. authorize, nmi, brain, element, payrix
	});
}).then(console.log);
</code>

<h3>Create a credit card payment profile (Payrix)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
var customerID;
//paymentProfile/create CC
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman'
}).then(function(customer){
	customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID, //286582
		"autopay":1,
		"billingAddress1": "5003 Quorum Dr",
		"billingCity": "Dallas",
		"billingState": "TX",
		"billingZip": "75252",
		"billingCountryID": "US",
		"paymentMethod": "1", //1:cc, 2:ach
		"merchantID": "4ec88309415fa4be1fa3889c2130bf5c",
		"merchantToken": "t1_tok_6287c8d8426e9aa739ecf7e",
		"gateway": "payrix",//ACH or CC gateway E.G. authorize, nmi, brain, element, payrix
	});
}).then(function(){
	return apiModule.call('payment','create',{
		'customerID':customerID,
		'paymentMethod':3,
		'amount':'100',
		'doCharge':1
	});
}).then(function(){
	return apiModule.search('paymentProfile',{'customerIDs':[customerID],'includeData':1});
}).then(console.log);
</code>

<h3>Create a credit card payment profile (BrainTree)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
//paymentProfile/create CC
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman'
}).then(function(customer){
	var customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID,
		"autopay":1,
		"billingAddress1": "5001 Quorum Dr",
		"billingCity": "Addison",
		"billingState": "TX",
		"billingZip": "75001",
		"billingCountryID": "US",
		"paymentMethod": "1", //1:cc, 2:ach
		"merchantID": "880744804", //paymentProfileTokenID
		"merchantToken": "mky6jbm",//paymentProfileToken
		"gateway": "brain",//ACH or CC gateway E.G. authorize, nmi, brain, element, payrix
	});
}).then(console.log);
</code>



<h3>Create a credit card payment profile (NMI)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
//paymentProfile/create CC
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman'
}).then(function(customer){
	var customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID,
		"autopay":1,
		"billingAddress1": "15000 Quorum Dr",
		"billingCity": "Addison",
		"billingState": "TX",
		"billingZip": "75001",
		"billingCountryID": "US",
		"paymentMethod": "1", //1:cc, 2:ach
		"merchantID": "zy98F9F8-9g2EV8-FZMQ7m-u5m7t8EH65ny",
		"gateway": "nmi",//ACH or CC gateway E.G. authorize, nmi, brain, element, payrix
	});
}).then(console.log);
</code>


<h3>Refund a payment</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('payment','createRefund',{
	'paymentID':10028,
	'amount':'100',
});
</code>

<h3>Create a credit card payment profile, test payment, refund payment (Payrix)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
var customerID;
//paymentProfile/create CC
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman',
	'officeID':13
}).then(function(customer){
	customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID, //286582
		"autopay":1,
		//"billingAddress1": "5003 Quorum Dr",
		//"billingCity": "Dallas",
		//"billingState": "TX",
		//"billingZip": "75252",
		//"billingCountryID": "US",
		"paymentMethod": "1", //1:cc, 2:ach
		"merchantID": "bc81c20b040b18afc9bc5a0f2880ecab",
		"merchantToken": "t1_tok_628bac7b1becf0e4094e9d6",
		"gateway": "payrix",//ACH or CC gateway E.G. authorize, nmi, brain, element, payrix
		'officeID':13
	});
}).then(function(){
	return apiModule.call('payment','create',{
		'customerID':customerID,
		'paymentMethod':3,
		'amount':'1',
		'doCharge':1,
		'officeID':13
	});
}).then(function(r){
	return apiModule.call('payment','createRefund',{
		'paymentID':r.result,
		'amount':'1',
		'officeID':13
	});
}).then(function(){
	return apiModule.search('paymentProfile',{'includeData':1,'customerIDs':[customerID],'officeIDs':0});
})
.then(console.log);
</code>
