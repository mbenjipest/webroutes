
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
