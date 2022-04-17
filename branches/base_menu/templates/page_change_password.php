<div class='change_password_page'>
	<div class='login_title'>
		Change Password
	</div>
	[[~input, {"Type":"text",     "Label":"Username", "Name":"username", "Class":"username"}]]
	[[~input, {"Type":"password", "Label":"Old Password", "Name":"password", "Class":"password"}]]
	[[~input, {"Type":"password", "Label":"Password", "Name":"new_password", "Class":"new_password"}]]
	[[~input, {"Type":"password", "Label":"Password Again", "Name":"new_password2", "Class":"new_password2"}]]
	<div class='login_status'></div>
	<div class='login_buttons'>
		<button class='change_password_button'>Change Password</button>
		<button class='logout_button'>Logout</button>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.on('click', '.change_password_button', function(){
		if(display.find('.new_password').val()!=display.find('.new_password2').val()){
			alert('Passwords must match.');
			return false;
		}
		$.post('/api/login/change_password',{
			'username':display.find('.username').val(),
			'password':display.find('.password').val(),
			'new_password':display.find('.new_password').val()
		},function( response ){
			if(response['Error']==true){
				display.find('.login_status').html(response['Error_message']);
				return;
			}
			display.find('input').val('');
			window.login_token = response['token'];
			localStorage.login_token=window.login_token;
			display.find('.login_status').html('Password changed.');
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