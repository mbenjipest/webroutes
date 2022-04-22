<div class='debug_panel' style='display:none;font-size:1.125em;'>
	<div>
		<button class='patch'  >patch</button>
		<button class='refresh'>refresh</button>
		<input type='text' class='branch' value='<?=$this->branch;?>' style='width:7em;text-align:center;'/>
		<button class='branch_go'>hot branch</button>
	</div>
	<div>
		<a class='debug_anchor' href='branch'>Directory</a>
		<a class='debug_anchor readme'>Readme</a>
		<a class='debug_anchor' href="<?= $this->url.'templates/'.$this->branch; ?>" download="templates.js">Templates</a>
		<a class='debug_anchor' href="<?= $this->url.'css/'      .$this->branch; ?>" download="<?=$this->branch;?>.css"  >CSS</a>
		<a class='debug_anchor' href="<?= $this->url.'build/'    .$this->branch; ?>" download="index.html"  >Shell</a>
	</div>
</div><script id="[[Template_id]]_driver">
(function () {
	var driver= $('#[[Template_id]]_driver');
	var display = driver.prev(); driver.remove();
	//var data = Template.data([[Template_id]]);

	display.append('Patched: '
		+ ( new Date() ).toLocaleString('en-US', { hour: 'numeric', minute:'numeric', second:'numeric', hour12: true }) 
		+ '  ' );
	display.append('Bank:'
		+ Object.keys( Template.debug() ).length );
	display.on('click', '.patch', function(){
		Template.patch().then( function(){
			display.after( Template.build('patch') ).remove();
			console.log('Patch applied '
				+ ( new Date() ).toLocaleString('en-US', { hour: 'numeric', minute:'numeric', second:'numeric', hour12: true }) );
			navigation.refresh();
			$('.debug_panel').show();
		});
	});

	display.on('click', '.branch_go', function(){
		var last_branch = Template.branch;
		Template.hot_branch( display.find('.branch').val() ).then( function(){
			display.after( Template.build('patch') ).remove();
			console.log('Branch '+ Template.branch +' applied '
				+ ( new Date() ).toLocaleString('en-US', { hour: 'numeric', minute:'numeric', second:'numeric', hour12: true }) );
			navigation.refresh();
			$('.debug_panel').show();
		});
	});

	display.on('click', '.refresh', function(){
		location.reload();
	});

	display.on('click', '.readme', function(){
		navigation.go('readme');
	});

	display.on('remove',function (){
		display.off();
		delete driver;
		delete display;
		Template.data_delete([[Template_id]]);
	});
})(Template);
</script>