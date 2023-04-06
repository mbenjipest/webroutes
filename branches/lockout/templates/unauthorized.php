<div style='' class='popup_unauthorized'>
	<div class='page_section' style=''>
		<div class='unauthorized_text'>
			A valid FieldRoutes API key and token is required to use this knowledge base.<br/>
			<br/>
			Please enter your connection details below.
		</div>
		[[~input, {"Type":"text", "Label":"Location", "Name":"apiUrl", "Class":"apiUrl", "Placeholder":"https://subdomain.fieldroutes.com/api/"}]]
		[[~input, {"Type":"text", "Label":"Key", "Name":"key", "Class":"apiKey"}]]
		[[~input, {"Type":"text", "Label":"Token", "Name":"token", "Class":"apiToken"}]]
		<button class='login_button'>Connect</button>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.on('click', '.login_button', function(){
		var url;
		try{
			url = (new URL(display.find('.apiUrl').val()));
		}catch(error){
			try{
				let parts = display.find('.apiUrl').val().split('/');
				if(parts.length==1){
					url=new URL('https://'+parts[0]+'.fieldroutes.com/api/');
				}else{
					return alert('URL invalid');
				}
			}catch(error){
				return alert('URL invalid');
			}
			
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

	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>