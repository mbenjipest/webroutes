<div class='login_page'>
	<div class='login_title'>
		Please Login
	</div>
	[[~input, {"Type":"text",     "Label":"Username", "Name":"username", "Class":"username"}]]
	[[~input, {"Type":"password", "Label":"Password", "Name":"password", "Class":"password"}]]
	<div class='login_status'></div>
	<div class='login_buttons'>
		<button class='login_button'>Login</button>
		<button class='logout_button'>Logout</button>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.on('click', '.login_button', function(){
		$.post('/api/login/login',{
			'username':display.find('.username').val(),
			'password':display.find('.password').val()
		},function( response ){
			if(response['Error']==true){
				display.find('.login_status').html(response['Error_message']);
				return;
			}
			display.find('.password').val('');
			window.login_token = response['token'];
			localStorage.login_token=window.login_token;
			display.find('.login_status').html('Welcome back.');
		},'json');
		
	});

	display.on('click', '.logout_button', function(){
		window.login_token = false;
	});

	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>