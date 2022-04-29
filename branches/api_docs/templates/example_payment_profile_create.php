<strong><p>Confirm payment gateway with office administrator - profiles created for inactive gateways will be inaccessable and unusable!</p></strong>

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
//paymentProfile/create CC
apiModule.call('customer','create',{
	'fname':'billy',
	'lname':'testman'
}).then(function(customer){
	var customerID=customer.result;
	return apiModule.call('paymentProfile', 'create',{
		"customerID": customerID, //286582
		"autopay":1,
		"billingAddress1": "5001 Quorum Dr",
		"billingCity": "Addison",
		"billingState": "TX",
		"billingZip": "75001",
		"billingCountryID": "US",
		"paymentMethod": "1", //1:cc, 2:ach
		"merchantID": "p1_tok_606e344b2efd8a0434ffeed",
		"merchantToken": "f3d69a82c4a9a5633d417057dda9c0de",
		"gateway": "payrix",//ACH or CC gateway E.G. authorize, nmi, brain, element, payrix
	});
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
