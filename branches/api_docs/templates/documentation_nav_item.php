<a href='#documentation_[[operationId]]' class='path_nav_header'>
	[[path]]
</a><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.on('click', function(e){
		e.preventDefault();
		$('#documentation_[[operationId]]').addClass('open');
		$('#documentation_[[operationId]]')[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		if(top>0){
			window.scrollTo(top,0);
		}
		e.stopPropagation();
	});
})(Template);
</script>