
<h3>Search for customerIDs unfiltered (50k limit)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{}).then(console.log);
</code>


<h3>Search for customerIDs unfiltered (requery to fetch full result)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
var fullResult=true;
apiModule.search('customer',{},fullResult).then(console.log);
</code>

<h3>Search for customers (50k limit) and includeData (1k entity limit)</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'includeData':1
}).then(console.log);
</code>

<h3>Search for customers and includeData, resolve all IDs ands entities staggered</h3>
<button class='run'>Execute</button>
<code class='example_code'>
var fullResult=true;
apiModule.search('customer',{
	'includeData':1
}, fullResult).then(console.log);
</code>

<h3>Search for customers updated since last check-in</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'dateUpdated':{
		'operator':'>',
		'value':'2022-03-01 00:00:00'
	},
	'includeData':1
},1).then(console.log);
</code>

<h3>Search for customer globally (all offices) by phone number</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'officeIDs':0,
	'phone':'5558675309',
	'includeData':1
}).then(console.log);
</code>

<h3>Search for customers with a balance older than 7 days</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'balanceAge':{
		'operator':'>',
		'value':'7'
	},
	'includeData':1
}).then(console.log);
</code>

<h3>Download all customers with a balance older than 7 days</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'balanceAge':{
		'operator':'>',
		'value':'7'
	},
	'includeData':1
},1).then(apiModule.download);
</code>

<h3>Download all invoices with a balance as JSON</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('ticket',{
	'balance':{
		'operator':'>',
		'value':'0'
	},
	'includeData':1
},1).then(apiModule.downloadJSON);
</code>

<h3>Download all customers globally</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.search('customer',{
	'officeIDs':0,
	'includeData':1
},1).then(apiModule.download);
</code>