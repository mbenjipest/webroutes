<section class='home page_section'>
	<section class='pre_line'>
		Welcome to the FieldRoutes API documentation!
		
		Resources:
		<a class='navigation_anchor' page='documentation' data='' href='/documentation'>
		<span class='home_icons'>📗</span>Documentation on individual endpoints</a>
		<a class='navigation_anchor' page='examples' data='' href='/examples'>
		<span class='home_icons'>👨‍🏫</span>Examples and workflows</a>
		<a class='navigation_anchor' page='faq' data='' href='/faq'>
		<span class='home_icons'>❔</span>Frequeuntly asked questions</a>
		<a class='navigation_anchor' page='tools' data='' href='/tools'>
		<span class='home_icons'>🔨</span>Tools</a>
		
		Things to know:
		
		<strong>Search endpoints</strong> have a return limit of 50,000 IDs.
		- If you encounter a result set that has exactly 50,000 IDs, more requests will be needed
		- Filter on the primary key using operator '&gt;' with a value as the last item in the last full set
		- Continue until a set of less than 50,000 is recieved
		
		<strong>Get endpoints</strong> have a return limit of 1,000 entities.
		- Break requests apart to request for 1,000 entites or fewer additional inputs may be truncated
		- Sending the authentication key and token as the last input parameters can ensure that no partial request will execute successfully
		
		<strong>Global keys</strong> and office scope:
		- By default, each key is associated with only one office
		- Single office keys have an implied `officeIDs` filter on read requests and an `officeID` property on each write request
		- Global keys may send any `officeIDs` filter to search and any `officeID` property on writes
		
		<strong>Key grouping</strong>:
		- By default each key has it's own distinct read/write limits
		- By request, keys can be grouped together such that their limits and usage are aggregated into a common pool
		
		
		
	</section>
</section><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
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
