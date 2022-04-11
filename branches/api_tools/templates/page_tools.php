<section class='page_tools'>
	<div class='downloads'></div>
	
	<div class='tool_section'>
		<a class='navigation_anchor' page='request_builder' data='' href='/request_builder'>Request Builder</a>
		<p>Useful tool for prototyping request filters</p>
	</div>
	
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove(); delete driver;
	//var data = Template.data([[Template_id]]);
	
	//keyset driver
	var keyset_ui = apiModule.getKeysetUI().prependTo(display);
	keyset_ui.on('click','.keyset',function(e){
		apiModule.setKeyset($(this).text());
		e.preventDefault();
	});

	//deconstructor
	display.on('remove',function (){
		display.off();
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>