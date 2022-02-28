<div class='menu'>
	<a class='navigation_anchor menu_item' href='/login'      page='login'     >
		<div class='menu_icon'></div>
		Login
	</a>
	<a class='navigation_anchor menu_item' href='/time_clock' page='time_clock'>
		<div class='menu_icon'></div>
		Time Clock
	</a>
	<a class='navigation_anchor menu_item' href='/routes'     page='routes'    >
		<div class='menu_icon'></div>
		Routes
	</a>
	<a class='navigation_anchor menu_item' href='/feedback'   page='feedback'  >
		<div class='menu_icon'></div>
		Feedback
	</a>
	<a class='menu_item debug'>debug</a>
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