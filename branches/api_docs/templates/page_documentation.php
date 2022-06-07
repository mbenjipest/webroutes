<div class='documentation'>
	<nav class='documentation_nav'>
		<h4 class='documentation_nav_header'>Endpoints</h4>
	</nav>
	<section class='documentation_content'>Loading...</section>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);
	
	//Get the documentation live and unwrap the endpoints
	apiModule.call('documentation','swagger',{})
	.then(function(docs){
		//save docs to window for later
		window.swagger=docs;
		buildPaths(docs);
	},function(){ //fail - use stale copy
		buildPaths(window.swagger);
	});
	
	var buildPaths=function(docs){
		//$('<pre>'+JSON.stringify(docs,null,"\t")+'</pre>').appendTo(display);
		display.find('.documentation_content').html(' ');
		let nav = display.find('.documentation_nav');
		
		
		var paths = Object.keys(docs.paths);
		paths.sort(function(a, b){
			if(a>b) return 1;
			if(b>a) return -1;
			return 0;
		});
		for(var i=0,l=paths.length;i<l;++i){
		//for(var path in docs.paths){
			let path=paths[i];
			
			$(Template.build('documentation_nav_item',{'path':path,...docs.paths[path].post})).appendTo(nav);
		
			$(Template.build('path_documentation',{
				...docs.paths[path],
				'path':path
			})).appendTo(display.find('.documentation_content'));
		}
	};
	
	console.log('Hint: Print this page for a handy reference sheet of endpoints that were discussed. :)');
})(Template);
</script>