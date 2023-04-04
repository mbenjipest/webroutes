<div style='position:absolute; top:0;right:0;bottom:0;left:0;background-color:#000;' class='popup_unauthorized'>
	<div class='page_section' style='max-width:60em; margin:10em auto 0 auto;'>
		<div style='border:1px solid #ccc; text-align:center; background-color: #000000;padding: 0.5em;margin-bottom: 3em;'>
			A valid FieldRoutes API key and token is required to use this knowledge base.<br/>
			<br/>
			Please enter your connection details below.
		</div>
		<style>
			.popup_unauthorized .input_guts{
				width:70%;
			}
			.popup_unauthorized .input_label{
				width:30%;
			}
		</style>
		[[~input, {"Type":"text", "Label":"Location", "Name":"apiUrl", "Class":"apiUrl", "Placeholder":"https://subdomain.fieldroutes.com/api/"}]]
		[[~input, {"Type":"text", "Label":"Key", "Name":"key", "Class":"apiKey"}]]
		[[~input, {"Type":"text", "Label":"Token", "Name":"token", "Class":"apiToken"}]]
		<button class='login_button' style="display:block; width:80%;margin:1em auto;">Connect</button>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.on('click', '.login_button', function(){
		try{
			var url = (new URL(display.find('.apiUrl').val()));
		}catch(error){
			return alert('URL invalid');
		}
		var subdomain = url.host.split('.')[0];
		
		console.log(subdomain);
		//Set api key
		apiModule.loadKeyset(subdomain,{
			"base_url":url,
			"keys":[display.find('.apiKey').val()],
			"tokens":[display.find('.apiToken').val()],
		},1);
		
		//test swagger and save keyset if successful
		apiModule.call('documentation','swagger',{})
		.then(function(docs){
			window.swagger=docs;
			apiModule.saveKeysetsLocally();
			localStorage.defaultKeyset=subdomain;
			navigation.release();
			navigation.go('home');
			display.remove();
		},function(response){
			if(response&&response.errorMessage){
				alert(response.errorMessage);
			}else{
				alert('could not find an API at '+url);
			}
		});
		
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