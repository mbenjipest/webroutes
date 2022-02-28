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
		<script src="cordova.js"></script>
		<script src="templates.js"></script>
		<script src="resources/navigation.js"></script>
		<link  href="styles.css" rel="stylesheet"/>
	<?php } else { ?>
		<script src="<?= $this->url.'resources/jquery-3.2.1.min.js'; ?>"></script>
		<script src="<?= $this->url.'templates/'.$branch; ?>"></script>
		<script src="<?= $this->url.'resources/navigation.js';?>"></script>
		<link  href="<?= $this->url.'css/'      .$branch; ?>" rel="stylesheet" id="template_css"/>
	<?php } ?>
		<script>
			// jQueryUI 'remove' event stub.
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
				$('body').on('click','.navigation_anchor', function( event ){
					//Letting control-click, and shift-click events through naturally
					if( event.ctrlKey || event.shiftKey || event.which!==1 ) return true;
					var $this = $(this);
					var data;
					var page = $this.attr('page');
					try{   data = JSON.parse( $this.attr('data') ); }
					catch(e){ data = {}; }
					if(page !== '')
						navigation.go( page, data, $this.attr('href') );
					event.stopPropagation();
					event.preventDefault();
					return false;
				});
				$.when( Template.patch() ).then( function(){
					//Debug interface
					display.before( Template.build('patch') );
					//Menu
					display.after(  Template.build('menu')  );
					//First Draw
					navigation.recover()
					|| //Recover || $start_page??'index'
					navigation.go(
						'<?=isset($start_page)?$start_page:'index';?>',
						<?=isset($start_data)?json_encode($start_data):'{}';?>,
						'<?=isset($start_uri)?$start_uri:'index';?>'
					);
				});
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