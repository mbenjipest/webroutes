<section class='api_path' id='documentation_[[operationId]]'>
	<div class='api_path_overlay'></div>
	<h3 class='api_path_header'>[[path]]</h3>
	<div class='api_parameters'>
		<section>[[description]]</section>
		<h4 class='api_parameters_header'>Parameters</h4>
		[[#parameters]]
			<div class='api_parameter'>
				<div class='api_parameter_header'><b>[[name]]</b> - <i>[[type]]</i>[[#required]] - <strong>required</strong>[[/required]]</div>
				<div>[[#description]][[description]][[/description]]</div>
			</div>
		[[/parameters]]
	</div>
	[[~api_response]]
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	var data = Template.data([[Template_id]]);
	
	//console.log(data);
	display.on('click','.api_path_overlay,.api_path_header',function(){
		display.toggleClass('open');
	});
	
	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>