
<h3>Create a customer (minimum)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe'
}).then(console.log);
</code>



<h3>Create a customer (more parameters)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe'
}).then(console.log);
</code>



<h3>Create and Update a customer</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.call('customer','create',{
	'fname':'John',
	'lname':'Doe'
}).then(console.log);
</code>


<h3>Update <strike>all</strike> 50 customers with a balance older than 180 days and &gt;$9000 to inactive</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'balanceAge':{
		'operator':'&gt;',
		'value':'180'
	},
	'balance':{
		'operator':'&gt;',
		'value':'9000'
	},
	'status':1,
	'includeData':1
},1).then(function(customers){
	customers=customers.slice(0,50); //lets just do 50 since it's a demo...
	
	let updates=[];
	for(var i=0,l=customers.length;i&lt;l;++i){
		updates.push({
			'customerID':customers[i]['customerID'],
			'status':0
		});
	}
	
	return apiModule.staggeredWrite('customer','update',updates,8);
}).then(console.log);
</code>

