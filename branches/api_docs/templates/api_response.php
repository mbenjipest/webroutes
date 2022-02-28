<div class='api_response'>
	<h4 class='api_response_header'>Response</h4>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	var data = Template.data([[Template_id]]);

	definition=data.responses.default.schema.$ref||data.responses.default.schema.items.$ref||'appointment';
	definition=definition.split('/').pop();
	
	let properties =
		window.swagger.definitions[definition].items&&window.swagger.definitions[definition].items.properties
		|| window.swagger.definitions[definition].properties
		|| window.swagger.definitions[definition].type;
	
	
	//$('<pre>'+JSON.stringify(properties,null,"\t")+'</pre>').appendTo(display);
	let output='';
	if(typeof properties==='string'){
		output=properties;
	}else{
		for(var prop in properties){
			output+=Template.build('api_response_property',{...properties[prop],'property':prop});
		}
	}
	display.append(output);
})(Template);
</script>