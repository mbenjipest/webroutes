<div class='menu'>
	<a class='navigation_anchor menu_item' href='/home' page='home'>
		<div class='menu_icon'><span>🏠</span></div>
		Home
	</a>
	<a class='navigation_anchor menu_item' href='/documentation' page='documentation'>
		<div class='menu_icon'><span>📗</span></div>
		Endpoints
	</a>
	<a class='navigation_anchor menu_item' href='/tools' page='tools'>
		<div class='menu_icon'><span>🔨</span></div>
		Tools
	</a>
	<a class='navigation_anchor menu_item' href='/examples' page='examples'>
		<div class='menu_icon'><span>👨‍🏫</span></div>
		Examples
	</a>
	<a class='navigation_anchor menu_item' href='/faq' page='faq'>
		<div class='menu_icon'><span>❔</span></div>
		FAQ
	</a>
	<a class='menu_item debug'>debug</a>
</div><script id="[[Template_id]]_driver">
var menu = (function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);


	//hide debug in prod
	display.find('.debug').remove();

	//debug panel isn't attached to a page anchor
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