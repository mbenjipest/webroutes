<div class='input_block'>
	<div class='input_label'>
		<span class='input_label_text'>[[Label]]</span>
	</div><div class='input_guts'>
		<div class='input_stretch'>
			<input class='input_whole [[Class]]' type='[[Type]]' name='[[Name]]' value='[[Value]]' placeholder='[[Placeholder]]'>
		</div>
		<div class='input_clear'>
			X
		</div>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	
	display.on('click', '.input_clear', function(){
		$(this).prev().find('input').val('');
	});

	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
	});
})(Template);
</script>