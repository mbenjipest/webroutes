<!DOCTYPE html>
<html>
	<head>
		<title>Branchs</title>
		<meta name="description" content="">
		<meta name="author" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=2"/>
		<!--<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>-->
		<script src="<?= $this->url.'resources/jquery-3.2.1.min.js'; ?>"></script>
		<style>
			body { font-family: Arial; }
			.branch{
				margin:1em 0 1em 1em;
				border-left: 1px dotted #CCC;
				background-color: #F3F3F3;
			}
			.mod_time{
				font-size:.75em;
			}
			.templates{
				font-size:.75em;
				font-family:mono;
				color: rgba(0,0,0,.3);
			}
			
			.templates:hover{
				color: rgba(0,0,0,1);
			}
			.branch .branch{ margin-top:0; }
		</style>
	</head>
	<body>
		<?php 
			function branch_recursive_html($branch, $url){
				$output=
				'<div class="branch">'.
					'<a href="'.$url.'branch/'.$branch['Branch'].'">'.
						($branch['Shell']?'<b>':'').$branch['Branch'].($branch['Shell']?'</b>':'').
					'</a> - <span class="mod_time">'.$branch['Modified_time'].'</span> - '.
					$branch['Description'].
					'<div class="templates">'.$branch['Templates'].'</div>';
				
				foreach($branch['Children'] as $child){
					$output.=branch_recursive_html($child, $url);
				}
				$output.='</div>';
				return $output;
			}
			foreach($sorted as $branch){
				echo branch_recursive_html($branch, $this->url);
			}
		?>
	</body>
</html>