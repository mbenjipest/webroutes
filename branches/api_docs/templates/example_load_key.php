
<h3>Load a key into the apiModule</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.loadKeyset('demo',{
	"base_url":"https://stagingdemo.pestroutes.com/api/",
	"keys":["88492884d8154febd1057372867c2e34b371d8fb"],
	"tokens":["6915e71f53708f17dba090febd2df4f9d79364d7"],
});
apiModule.setKeyset('demo)
</code>

<h3>Load a key into the apiModule and activate</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.loadKeyset('demo',{
	"base_url":"https://stagingdemo.pestroutes.com/api/",
	"keys":["88492884d8154febd1057372867c2e34b371d8fb"],
	"tokens":["6915e71f53708f17dba090febd2df4f9d79364d7"],
},true);
</code>

<h3>Save a keyset locally</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.saveKeysetsLocally();
</code>