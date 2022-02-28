display.on('remove',function (){
	display.off();
	delete driver;
	delete display;
	delete data;
	Template.data_delete([[Template_id]]);
});