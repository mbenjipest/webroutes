<section class='page_examples page_section'>
	<div class='downloads'></div>
	
			
	<section class='pre_line'>
This document contains a JavaScript module 'apiModule' that can be used to invoke calls through a simplified interface.
The module can be found <a href='resources/APIModule.js' target= download='fieldRoutesAPIModule.js'><u>Here</u></a>.

These calls can be inspected through the network section of the web development console
to observe request payloads and response data

API documentation on individual endpoints can be found <a class='navigation_anchor' page='documentation' data='' href='/documentation'><u>Here</u></a>.
	</section>
	
	<nav class='example_nav'>
		<h4 class='example_nav_header'>API Workflows</h4>
		<a href='#example_search' class='example_nav_item'>Search Examples</a>
		<a href='#example_customer_create' class='example_nav_item'>Create/Update customers</a>
		<a href='#example_subscription_create' class='example_nav_item'>Create/Update subscriptions and leads</a>
		<a href='#example_payment_profile_create' class='example_nav_item'>Create/Update a Payment Profile</a>
		<a href='#example_document_upload' class='example_nav_item'>Upload Documents and Contracts</a>
		<h4 class='example_nav_header'>Advanced apiModule usage</h4>
		<a href='#example_proxy' class='example_nav_item'>Proxy front-end requests to middleware</a>
		<a href='#example_load_key' class='example_nav_item'>Load Keys into apiModule</a>
		<h4 class='example_nav_header'>Other</h4>
		<a href='#example_complex_examples' class='example_nav_item'>Complex Examples</a>
		<a href='#example_old_examples' class='example_nav_item'>Older Examples</a>
	</nav>
	
	[[~example_section, {'example':'search','title':'Search Examples'} ]]
	
	[[~example_section, {'example':'customer_create','title':'Create/Update customers'} ]]
	
	[[~example_section, {'example':'subscription_create','title':'Create/Update subscriptions and leads'} ]]
	
	[[~example_section, {'example':'payment_profile_create','title':'Create/Update a Payment Profile'} ]]
	
	[[~example_section, {'example':'document_upload','title':'Upload documents and contracts with base64'} ]]
	
	[[~example_section, {'example':'proxy','title':'Proxy usage example (key obfuscation)'} ]]
	
	[[~example_section, {'example':'load_key','title':'Load keys into the JavaScript apiModule'} ]]
	
	[[~example_section, {'example':'complex_examples','title':'Complex Examples'} ]]
	
	[[~example_section, {'example':'old_examples','title':'Older Examples'} ]]
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove(); delete driver;
	//var data = Template.data([[Template_id]]);

	//code block RUN driver
	display.on('click', '.run', function(e){
		var codeSample = $(this).nextAll('code').html();
		codeSample = codeSample.replace(/&lt;/g, "<");
		codeSample = codeSample.replace(/&gt;/g, ">");
		codeSample = codeSample.replace(/&amp;/g, "&");
		eval(codeSample);
	});
	
	//index driver
	display.on('click', '.example_nav_item', function(e){
		e.preventDefault();
		let target=this.href.split("#").pop();
		$('#'+target).addClass('open');
		$('#'+target)[0].scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		$('#'+target).one('transitionend webkitTransitionEnd oTransitionEnd',function(){
			this.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
		})
		if(top>0){
			window.scrollTo(top,0);
		}
		e.stopPropagation();
	});
	
	//example overlay driver
	display.on('click', '.example_header', function(e){
		$(this).closest('.example_section').toggleClass('open');
		e.stopPropagation();
	});
	
	//example overlay driver
	display.on('click', '.example_overlay', function(e){
		$(this).closest('.example_section').toggleClass('open');
		e.stopPropagation();
	});
	
	//keyset driver
	var keyset_ui = apiModule.getKeysetUI().prependTo(display);

	//deconstructor
	display.on('remove',function (){
		display.off();
		delete keyset_ui;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>