<!DOCTYPE html>
<html>
	<head>
		<title>Branch <?php echo $branch;?></title>
		<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
		<meta content="utf-8" http-equiv="encoding">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
		
	<?php if(isset($build) && $build==true){ ?>
		<script src="resources/jquery-3.2.1.min.js"></script>
		<script src="resources/jquery-ui.min.js"></script>
		<link  href="resources/jquery-ui.min.css" rel="stylesheet"/>
		<script src="cordova.js"></script>
		<script src="templates.js"></script>
		<script src="resources/navigation.js"></script>
		<link  href="styles.css" rel="stylesheet"/>
	<?php } else { ?>
		<script src="<?= $this->url.'resources/jquery-3.2.1.min.js'; ?>"></script>
		<script src="<?= $this->url.'resources/jquery-ui.min.js'; ?>"></script>
		<link  href="<?= $this->url.'resources/jquery-ui.min.css'; ?>" rel="stylesheet" />

		<script src="<?= $this->url.'templates/'.$branch; ?>"></script>
		<script src="<?= $this->url.'resources/navigation.js';?>"></script>
		<link  href="<?= $this->url.'css/'      .$branch; ?>" rel="stylesheet" id="template_css"/>

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

				// Phone home for new code
				Template.patch().then( function(){
					//Add Debug interface
					display.before( Template.build('patch') );
					//Add Menu
					display.after(  Template.build('menu')  );
					
					//Try to recover an old navigation state
					navigation.recover()
					|| //Or go to whatever page was specified at compile time
					navigation.go(
						'<?=isset($start_page)?$start_page:'index';?>',
						<?=isset($start_data)?json_encode($start_data):'{}';?>,
						'<?=isset($start_uri)?$start_uri:'index';?>'
					);
				});

				//If we have a login token, we're logged in.
				if(localStorage.login_token){
					window.login_token=localStorage.login_token;
				}

				/*
				//Start the global UTC timer
				var time_container = $('#time_container');
				var set_time = function(){
					var date = new Date();
					var output = new Date().toISOString().slice(0, 19).replace('T', ' ');
					time_container.html(output);
				};
				var interval = setInterval(set_time,1000); set_time();

				time_container.on('remove',function (){
					delete time_container;
					clearInterval(interval);
					delete interval;
					delete set_time;
				});
				*/

			});
		</script>
	</head>
	<body>
		<div id="time_container"></div>
		<div id="page_container">
			<div class="page">
				Loading...<!-- DEFAULT DOCUMENT -->
			</div>
		</div>
	</body>
</html>