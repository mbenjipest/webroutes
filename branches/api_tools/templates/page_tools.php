<section class='page_tools page_section'>
	<div class='downloads'></div>
	
	<div class='tool_section'>
		<a class='navigation_anchor' page='request_builder' data='' href='/request_builder'><u>Request Builder</u></a>
		<p>Useful tool for prototyping request filters</p>
	</div>
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove(); delete driver;
	//var data = Template.data([[Template_id]]);
	
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