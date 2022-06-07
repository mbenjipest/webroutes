<a href='#documentation_[[operationId]]' class='path_nav_header'>
	[[path]]
</a><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);
	var page = display.closest('.page')[0];
	display.on('click', function(e){
		e.preventDefault();
		$('#documentation_[[operationId]]').addClass('open');
		//$('#documentation_[[operationId]]')[0].scrollIntoView({behavior: "smooth", block: "top", inline: "nearest"});
		
		let y = $('#documentation_[[operationId]]')[0].getBoundingClientRect().top + page.scrollTop - 150;
		page.scrollTo({top: y, behavior: 'smooth'});
		e.stopPropagation();
	});
})(Template);
</script>