<section class='page_request_builder page_section'>
	<div class='downloads'></div>
	
	<h4>path</h4>
	<select name='path' class='request_builder_path'>
		<option value='0' selected="selected">Choose a path...</option>
		<option value='/customer/search'>/customer/search</option>
	</select>
	
	<h4>Current Filters:</h4>
	<div class='request_builder_staged_filters'>
		<div class=''></div>
	</div>
	<div class='path_filters'>property, operator, value</div>
	
	<h4>Add Filter</h4>
	<select name='filter' class='request_builder_path'>
		
	</select>
	
	
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove(); delete driver;
	//var data = Template.data([[Template_id]]);
	
	
	
	
	
	//Get the documentation live and unwrap the endpoints
	apiModule.call('documentation','swagger',{})
	.then(function(docs){
		//save docs to window for later
		window.swagger=docs;
		buildOptions(docs);
	},function(){ //fail - use stale copy
		buildOptions(window.swagger);
	});
	
	var paths;
	
	var buildOptions=function(docs){
		paths=docs.paths;
		for(var path in docs.paths){
			
		}
	};
	
	
	
	
	
	//path change listener
	display.on('change','.request_builder_path',function(e){
		var path = $(this).val();
		var parameters = paths[path]['post']['parameters'];
		
		var filterOptionsDisplay=$('<div></div>);
		
		for(var i=0,l<parameters.length;i<l;++i){
			filterOptionsDisplay.append(
				Template.build('tool_builder_parameter', { ...parameters[i], 'path':path});
			)
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//keyset driver
	var keyset_ui = apiModule.getKeysetUI().prependTo(display);
	//deconstructor
	display.on('remove',function (){
		display.off();
		delete keyset_ui;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>