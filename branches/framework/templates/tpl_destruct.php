<script id="[[Template_id]]_destruct_driver">
(function () {
	var driver= $('#[[Template_id]]_destruct_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);
	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>