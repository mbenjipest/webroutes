<!DOCTYPE html>
<html>
	<head>
		<title>FieldRoutes API Documentation</title>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta content="utf-8" http-equiv="encoding">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
		
	<?php if(isset($build) && $build==true){ ?>
		<script src="resources/jquery-3.2.1.min.js"></script>
		<!--<script src="resources/jquery-ui.min.js"></script>-->
		<!--<link  href="resources/jquery-ui.min.css" rel="stylesheet"/>-->
		<!-- <script src="cordova.js"></script>-->
		<script src="resources/navigation.js"></script>
		<script src="resources/swagger.js"></script>
		<script src="resources/APIModule.js"></script>
		<script src="templates.js"></script>
		<link  href="css/<?=$branch;?>.css" rel="stylesheet" id="template_css"/>
	<?php } else { ?>
		<script src="<?= $this->url.'resources/jquery-3.2.1.min.js'; ?>"></script>
		<!--<script src="<?= $this->url.'resources/jquery-ui.min.js'; ?>"></script>-->
		<!--<link  href="<?= $this->url.'resources/jquery-ui.min.css'; ?>" rel="stylesheet" />-->

		<script src="<?= $this->url.'resources/navigation.js';?>"></script>
		<script src="<?= $this->url.'resources/swagger.js';?>"></script>
		<script src="<?= $this->url.'resources/APIModule.js';?>"></script>
		<script src="<?= $this->url.'templates/'.$branch; ?>"></script>
		<link  href="<?= $this->url.'css/'      .$branch; ?>.css" rel="stylesheet" id="template_css"/>
	<?php } ?>
		<script>
			// Add 'remove' event to jQuery (from jqueryUI)
			$.cleanData = (function( original_fn ) {
				return function( elements ) {
					var events, element;
					for (var i = 0; (element = elements[i]) != null; ++i) {
						try {
							events = $._data( element, "events" );
							events && events.remove && $(element).triggerHandler("remove");
						} catch ( e ) {}
					} original_fn( elements );
				};
			})( $.cleanData );
		</script>

		<script>
			console.log('branch: '+'<?=$branch;?>');
			$( function(){
				var display = $('#page_container');
				window.navigation = new_navigation( display );

				//Bind the navigation_anchor <a> class to the navigation module
				$('body').on('click','.navigation_anchor', function( event ){
					//Letting control-click, and shift-click events through naturally
					if( event.ctrlKey || event.shiftKey || event.which!==1 ) return true;
					var $this = $(this);
					var data;
					var page = $this.attr('page');
					try{ data = JSON.parse( $this.attr('data') ); }
					catch(e){ data = {}; }
					if(page !== '')
						navigation.go( page, data, $this.attr('href') );
					event.stopPropagation();
					event.preventDefault();
					return false;
				});

				//If we have a login token, we're logged in.
				if(localStorage.login_token){
					window.login_token=localStorage.login_token;
				}

				<?php if(!@isset($build) || $build==false){ ?>
				// Phone home for new code
				Template.patch()
				<?php }else{ ?>
				Promise.resolve()
				<?php }?>
				.then( function(){
					//Add Debug interface
					display.before( Template.build('patch') );
					window.debug=function(){$('.debug_panel').toggle();}
					
					//Add Menu
					display.after(  Template.build('menu')  );
					function startPage(){
						var lastPart=location.pathname.split('/').pop();
						if(typeof Template.templates['page_'+lastPart] !== 'undefined'){
							return lastPart;
						}
						return 'index';
					}
					//Try to recover an old navigation state
					navigation.recover() //no semi colon on purpose this is a short-circuit
					|| //Or go to whatever page was specified at compile time
					<?php if(!@isset($build) || $build==false){ ?>
					navigation.go(
						'<?=isset($start_page)?$start_page:'index';?>',
						<?=isset($start_data)?json_encode($start_data):'{}';?>,
						'<?=isset($start_uri)?$start_uri:'index';?>'
					);
					<?php }else{ ?>
					navigation.go(
						startPage(),
						<?=isset($start_data)?json_encode($start_data):'{}';?>,
						startPage()
					);
					<?php }?>
					
				});
				
				//highlight JS object function
				function highlight_js(data){
					var json = JSON.stringify(data, null, 4);
					json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
					return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match){
						var cls = 'number';
						if (/^"/.test(match)) {
							if (/:$/.test(match)) {
								cls = 'key';
							} else {
								cls = 'string';
							}
						} else if (/true|false/.test(match)) {
							cls = 'boolean';
						} else if (/null/.test(match)) {
							cls = 'null';
						}
						return '<span class="' + cls + '">' + match + '</span>';
					});
				}
			});
		</script>
	</head>
	<body>
		<div id="page_container">
			<div class="page">
				Loading...<!-- DEFAULT DOCUMENT -->
			</div>
		</div>
	</body>
</html>