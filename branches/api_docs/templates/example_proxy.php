
<h3>Load a key for proxy usage</h3>
<button class='run'>Execute</button>
<code class='example_code'>
apiModule.loadKeyset('proxy',{
	"base_url":"/api/proxy/send/",
	"keys":["does not matter"],
	"tokens":["does not matter"],
},1);
</code>

<h3>PHP basic proxy code</h3>
<code class='example_code'>
<?php echo preg_replace('/(x88492884d8154febd1057372867c2e34b371d8fb|x6915e71f53708f17dba090febd2df4f9d79364d7)/','xxx', htmlspecialchars(@file_get_contents('php_examples/proxy_basic.php')) );?>
</code>
