<div class='menu'>
	<a class='navigation_anchor menu_item' href='/login'      page='login'     >
		<div class='menu_icon'>#</div>
		Login
	</a>
	<a class='navigation_anchor menu_item' href='/readme' page='readme'>
		<div class='menu_icon'>?</div>
		Readme
	</a>
	<a class='menu_item' href='/branch'>
		<div class='menu_icon'>\|/</div>
		Branches
	</a>
	<a class='menu_item debug'>
		<div class='menu_icon'>&lt;&gt;</div>
		Debug
	</a>
</div><script id="[[Template_id]]_driver">
var menu = (function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);
	display.on('click', '.debug',function(){
		$('.debug_panel').toggle();
	});

	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>