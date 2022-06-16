<?php
//This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License
// http://creativecommons.org/licenses/by-sa/4.0/

$instance = new Temp();
Class Temp{ // Compiled Templates | CSS Variables | Live Patching | Live Branching | A/B Testing
	private $url = 'https://fieldroutes.dev/';
	//private $url = 'https://localhost/';
	private $source_dir = '';
	private $branch = 'HEAD';//HEAD
	private $config = [
		'start_uri'=>'index',
		'start_page'=>'index',
		'start_data'=>[]
	];
	
	//globally available template variables e.g. [[!Logo]]
	private $globals = [
		"Company_name"  => "FieldRoutes",
		"Logo"          => 'FieldRoutes'
	];
	
	private $debug = false;
	// URL handler - Passes parts to function arguments - domain.com/function/arg1/arg2?query=string
	function __construct(){
		//Determine which branch we are patching
		$this->branch = @isset($_COOKIE['Branch'])? $_COOKIE['Branch'] : $this->branch;
		$this->branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $this->branch );
		
		//Get arguments from the path
		$request_parts=explode('?',$_SERVER['REQUEST_URI']);
		$request_uri=$request_parts[0];
		$query_string=@isset($request_parts[1])?$request_parts[1]:'';
		$args=explode('/', str_replace('index.php/','',$request_uri) );
		if($args[0]=='')
		  array_shift($args); // we don't need this bit if it's empty
		$function = preg_replace("/[^A-Za-z0-9 _\-]/", '', array_shift($args) );
		if($function==''){ //no uri, retrieve an app shell
			$this->index();
		}else if( method_exists( $this, $function) ){ //If it's a public method below, invoke it
			$reflection = new ReflectionMethod($this, $function);
			if( $reflection->isPublic() )
				call_user_func_array( array($this, $function), $args );
		} else { // Otherwise we'll assume it's hash
			$this->config['start_page']=$function;
			$this->config['start_data']=[];
			$this->config['start_uri']=$function;
			$this->index(); //exit('Could not find '.$function);
		}
	}
	//Returns the application shell (shell.php) associated with the specified branch or it's closest parent. $build set in local context (use in included file)
	public function index( $branch = null, $parent = null, $build = false){
		$branch = isset($branch) ? $branch : $this->branch;
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch );
		$shell = $this->source_dir."branches/".(isset($parent)?$parent:$branch)."/shell.php";
		if(file_exists($shell)){
			$config=$this->config;
			$start_page=$this->config['start_page'];
			$start_data=$this->config['start_data'];
			$start_uri=$this->config['start_uri'];
			include $shell;
			return; //Found a shell, we're done here
		}
		//We didn't find a shell, recursively check the parents
		$inherit = $this->source_dir."branches/".(isset($parent)?$parent:$branch)."/inherit.txt";
		if(file_exists($inherit)){
			$inherit_id = file_get_contents($inherit);
			$this->index($branch, $inherit_id, $build);
			return;
		}
		//We're out of parents to check.
		exit('Failed to retrieve appshell. <a href="/reset">Reset</a>');
	}
	//Passes the build variable to the shell, ideally switches to production variables and resources
	public function build($branch = null){
		$this->index($branch, null, true);
	}
	//Outputs an HTML document indexing all branches with description
	//pass a branch number to set a cookie and redirect
	public function branch( $branch = null ){
		if(isset($branch)){
			$secure = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] != 'off');
			//        key,      value,   expire time,        path,             domain,   secure, httponly
			setcookie('Branch',$branch,time()+(30*24*60*60),'/',$_SERVER['SERVER_NAME'],$secure, true);
			header('Location: '.$this->url);
			die();
		}
		$dir = $this->source_dir."branches";
		$raw = scandir($dir);
		$branchs=array();
		$sorted=array();
		
		foreach($raw as $branch){
			if(preg_match('/^\./',$branch)) continue;
			$temp = array();
			$temp['Branch']=$branch;
			
			$dir=$this->source_dir."branches/".$branch;
			if(file_exists($dir.'/inherit.txt')){
				$temp['Inherit']=file_get_contents($dir.'/inherit.txt');
			}
			if(file_exists($dir.'/description.txt')){
				$temp['Description']=file_get_contents($dir.'/description.txt');
			} else{
				$temp['Description'] = '';
			}
			
			$temp['Modified_time']= filemtime($dir);
			$temp['Modified_time']=date("Y-m-d H:i:s", $temp['Modified_time'] );
			
			$temp['Shell']=file_exists($dir.'/shell.php');
			$temp['Templates']='';
			foreach(glob('branches/'.$branch.'/templates/*.php') as $template){
				preg_match('@/([^/]*?)\.php$@', $template, $matches);
				$temp['Templates'].=' '.$matches[1].',';
			}
			$temp['Templates']=rtrim($temp['Templates'],',');
			
			$temp['Children']=array();
			$branchs[$branch]=$temp;
		}
		
		foreach($branchs as $branch=>$data){
			if(!isset($data['Inherit'])){
				$sorted[$branch]=&$branchs[$branch];
				continue;
			}
			
			$branchs[$data['Inherit']]['Children'][]=&$branchs[$branch];
		}
		include $this->source_dir.'branch_directory.php';
	}
	public function reset(){
		setcookie('Branch', null, -1, '/');
		unset($_COOKIE['Branch']);
		$this->branch='HEAD';
		$this->index();
	}

	//Returns a javascript module containing the templates of the specified branch
	public function templates( $branch = 1 ){
		$branch = isset($branch) ? $branch : $this->branch;
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch );
		$templates=array();
		$this->get_templates($templates, $branch);
		$items='';
		foreach($templates as $key=>$value){
			$items.='"'.$key.'":function(data, save_data){ return '.$this->compile_template($value).";},";
		}

		header ('Content-type: text/javascript; charset=UTF-8');
		//First create tidy function scope with supporting functions
		$output=<<<EOT
var Template = (function(){
	var m = {};
	var bank = {};
	var index = 1;
	// Template name, Data to build, Data set to Template_id
	m.build = function( name, data, save_data){
		if( typeof name === 'undefined' || (!(name in m.templates) && typeof name!=='function') )
			return;
		data = data||{};
		save_data=save_data||data;
		data['Template_id'] = m.data_set(save_data);
		if( typeof name === 'function'){
			return name(data, save_data);
		}
		return m.templates[name](data, save_data);
	};
	m.data_set = function( data, template_id ){
		//If we have no explicit template_id, look for one in the data and check that it's set
		if(    typeof template_id               === 'undefined'
			&& typeof data['Template_id']       !== 'undefined'
			&& typeof bank[data['Template_id']] !== 'undefined'){
			template_id = data['Template_id'];
		} else if ( typeof template_id === 'undefined' ){
			template_id = ++index;
			bank[template_id]=data;
		} else {
			bank[template_id]=data;
		}
		return template_id;
	};
	m.data_delete = function( data_id ){
		return delete bank[data_id];
	}
	m.data = function( data_id ){
		return bank[data_id];
	};
	m.encode = function(value){
		if( value && typeof value.replace === 'function')
			value = value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
		return value;
	}
	m.out = function(data){
		return (data && data !== null) ? m.encode(data) : "";
	};
	m.raw = function(data){ return data||""; };
	m.debug = function(){ return bank; };
EOT;
	$output.= "
	m.patch = async function(){
		return new Promise( function( resolve, reject ){
			//use jquery getScript then resolve
			try{ $.getScript('".$this->url."patch/'+m.branch+'/'+m.compile_time)
				.always(function(){ resolve(); });
			} catch( e ){ reject(e); }
		});
	};
	m.hot_branch = async function(branch){
		var last_branch= m.branch;
		m.branch       = branch;
		m.templates     = {};
		m.compile_time  = 0;
		$('#template_css')
			.after(\"<link href='".$this->url."css/\"+branch+\".css' rel='stylesheet' id='template_css'/>\")
			.remove();

		return new Promise( function( resolve, reject ){
			m.patch()
			.then(function(){
				if(Object.keys(Template.templates).length==0){ // nothing here! revert!
					m.hot_branch( last_branch ).then(reject());
				}else{ resolve() }
			});
		});
	};
";
		//Here we're dumping a few variables into the function scope
		$output.= 'm.compile_time='.time().';/*'.gmdate( "Y-m-d H:i:s").'*/';
		$output.= 'm.branch="'.$branch.'";';

		$templates=[]; //Passing this array's reference
		$this->get_templates($templates, $branch); // to the recursive get_templates
		$items=''; //Building a json object full of functions (compiled templates)
		foreach($templates as $key=>$value){//                  "  from json encode               "
			$items.='"'.$key.'":function(data, save_data){ var o='.$this->compile_template($value)."; return o;},";
		}
		$output.= 'm.templates={'.rtrim($items,',').'};';
		$output.= 'm.config='.json_encode($this->globals).';';

		//Close the function scope
		$output.= 'return m; })()';
		echo $output;
	}
	//Returns a javascript object that the included templating module can use to patch new templates
	//Unix time (seconds since epoch)
	public function patch($branch=null, $time=0){
		$this->branch=isset($branch) ? $branch : $this->branch;
		if(@isset($_REQUEST['Time']))
			$time=$_REQUEST['Time'];
		$patch_time = floor($time);
		
		$templates=array();
		$this->get_templates($templates, $this->branch, $patch_time);
		header ('Content-type: text/javascript; charset=UTF-8');
		$items='';
		foreach($templates as $key=>$value){ //                              " from json encode                "
			$items.='m.templates["'.$key.'"]=function(data, save_data){ var o='.$this->compile_template($value)."; return o;};\n";
		}
		echo '(function (m){'.$items.' m.compile_time='.time().';})(Template);';
	}

	// This is where we define the grammar of the templating language
	private function compile_template( $value ){
		$string = json_encode($value);
		//[[![[some_key]]]]
		$string = preg_replace('/\[\[!\[\[([a-zA-Z0-9_]+?)\]\]\]\]/',
			'"+ m.raw(m.config[data["$1"]]) +"',
			$string );
		//[[!config]]
		$string = preg_replace('/\[\[!([a-zA-Z0-9_]+?)\]\]/',
			'"+ m.config["$1"] +"',
			$string );
		//[[#conditional_loop]]
		$string = preg_replace('/\[\[#([a-zA-Z0-9_]+?)\]\]/',
			'"; if(data["$1"]){if(!Array.isArray(data["$1"])){data["$1"]=[{"$1":data["$1"]}];}for(var i=0,l=(typeof data["$1"]!=="string"?data["$1"].length:1)||1;i<l;++i){ o+=m.build(function(data, save_data){ var o="' ,
			$string );//concat method->//'"+ ( (data["$1"]) ? ("',
		//[[^invert_conditional]]
		$string = preg_replace('/\[\[\^([a-zA-Z0-9_]+?)\]\]/',
			'"; if(!data["$1"]){for(var i=0;i<1;++i){ o+=m.build(function(data, save_data){ var o="' ,
			$string );//concat method->//'"+ ( (data["$1"]) ? ("',
		//[[/conditional_loop]] (/ json_encoded to \/)
		$string = preg_replace('@\[\[\\\\/([a-zA-Z0-9_]+?)\]\]@',
			'"; return o;}, data["$1"][i], data["$1"][i]); }}o+="',
			$string );
		//concat method->//'"):"" ) +"',
		//[[~Template_[[some_key]],  {"any":"json"}  ]]
		$string = preg_replace_callback(
			'/\[\[~([^\[\]]*)\[\[([a-zA-Z0-9_]+?)\]\]([^\[\]]*),\s*([^\]]+?)\s*\]\]/',
			function($matches){
				return '"+ m.build("'.$matches[1].'"+data["'.$matches[2].'"]+"'.$matches[3].'",'.$matches[4].', save_data) +"';
			}, $string );
		//[[~Template,  {"any":"json"}  ]]
		$string= preg_replace_callback(
			'/\[\[~([a-zA-Z0-9_]+?),\s*([^\]]+?)\s*\]\]/',
			function($matches){
				return '"+ m.build("'.$matches[1].'",'.stripslashes($matches[2]).') +"';
			}, $string );
		//this was before any:json -- does order matter here
		//[[~Template_[[some_key]]]]
		$string = preg_replace('/\[\[~([^\[\]]*)\[\[([a-zA-Z0-9_]+?)\]\]([^\[\]]*)\]\]/',
			'"+ m.build("$1"+data["$2"]+"$3", data, save_data) +"',
			$string);
		//[[~Template]]
		$string = preg_replace('/\[\[~([a-zA-Z0-9_]+?)\]\]/', '"+ m.build("$1", data, save_data) +"', $string );
		
		//[[some.deep.key]]
		$string = preg_replace('/\[\[([a-zA-Z0-9_\.]+?)\]\]/', '"+ m.out(data.$1) +"', $string );
		
		//[[some_key]]
		$string = preg_replace('/\[\[([a-zA-Z0-9_]+?)\]\]/', '"+ m.out(data["$1"]) +"', $string );
		
		//[-[some_delimited_expression]]
		$string = preg_replace('/\[-\[(.+?)\]\]/', '[[$1]]', $string );
		return $string;
	}
	//Recursively fills your Array sent by reference with templates for the specified branch
	// optionally specify last compile time (unix time) for a patch job     Array['template']
	private function get_templates(&$templates, $branch=1, $time=0){
		$branch = isset($branch) ? $branch : $this->branch;
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch );
		
		//Check inheritance first
		$inherit = $this->source_dir."branches/".$branch."/inherit.txt";
		if(file_exists($inherit)){
			$inherit_id = file_get_contents($inherit);
			$this->get_templates($templates, $inherit_id, $time);
		}
		
		$dir = $this->source_dir."branches/".$branch."/templates";
		if(!file_exists($dir))
			return;
		$names = scandir($dir);
		foreach($names as $name){
			//echo filemtime($dir . '/' . $name) . '|'; echo $name.'|';
			if(filemtime($dir . '/' . $name) < $time || strlen($name)<=2){
				unset($templates[$name]);//Prevent upstream changes from affecting downstream
				continue;
			}
			$temp = explode( '.', $name );
			$ext = array_pop( $temp ); //remove extension
			$name = implode( '.', $temp );
			
			$templates[$name]=$this->view($dir.'/'.$name);
		}
	}
	
	//Returns the output of an include
	private function view( $filename, $branch=1){
		$branch = isset($branch) ? $branch : $this->branch;
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch );
		ob_start();
		include($filename.'.php');
		return @ob_get_clean();
	}

	// Returns the text/css document for the specified branch
	public function css( $branch = 1 ){
		$branch = preg_replace("/\.css$/", '', $branch );
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch );
		header ('Content-type: text/css; charset=UTF-8');
		$css = $this->compile_css($this->css_branch($branch));
		if($this->debug)
			die($css);
		$css = preg_replace("@/?\*?\s*?<hunk[^>]*?>\s*\*?/?(?!.*<hunk>)@s", '', $css);
		$css = preg_replace("@/?\*?\s*?</hunk[^>]*?>\s*\*?/?(?!.*</hunk>)@s", '', $css);
		echo $css;
	}
	//Developer tool for merging branches without compiling variables
	//Merges child branch with it's parent until end branch is reached
	public function merge_css($child, $end = null){
		header ('Content-type: text/css; charset=UTF-8');
		echo $this->css_branch($child, $end);
	}

	// Returns raw css for this branch and all parents
	private function css_branch($branch=1,$stop_branch=null){
		$branch = preg_replace("/[^A-Za-z0-9 _\-]/", '', $branch);
		
		//Check inheritance first
		$inherit = $this->source_dir."branches/".$branch."/inherit.txt";
		if($branch!=$stop_branch && file_exists($inherit)){
			$inherit_id = file_get_contents($inherit);
			$input_string = $this->css_branch($inherit_id, $stop_branch);
		} else {
			$input_string = '/*Compile Time: '.gmdate( "Y-m-d H:i:s").'*/'; // css debug hooks
		}
		
		$dir = $this->source_dir."branches/".$branch."/styles.css";
		if(!file_exists($dir))
			return $input_string;
		
		$branch_string = file_get_contents($dir);
		return $this->combine_css($input_string, $branch_string);
	}
	
	//Replace all hunks in the input string with hunks in branch; append the rest; some formatting.
	private function combine_css($input_string='', $branch_string=''){
		$branch = $this->get_hunks( $branch_string );
		foreach($branch as $key => $value){
			$count=0;
			$input_string  = preg_replace('@/\*\s*?<hunk[^>]*name="'.$key.'">.*?</hunk name="'.$key.'">\s*\*/@s', $branch[$key], $input_string, -1, $count);
			if($count>0){
				$branch_string = preg_replace('@/\*\s*?<hunk[^>]*name="'.$key.'">.*?</hunk name="'.$key.'">\s*\*/@s', '', $branch_string);
			}
		}
		return trim($input_string."\n".$branch_string);
	}

	//Returns an array of hunks, also modifies (cleans up) input String passed by ref
	private function get_hunks(&$style){
		//Find line numbers of all of the opening / closing hunks
		preg_match_all('@/\*\s*?<hunk[^>]*>\s*\*/@s', $style, $opens, PREG_OFFSET_CAPTURE);
		preg_match_all('@/\*\s*?</hunk[^>]*>\s*\*/@s', $style, $closes, PREG_OFFSET_CAPTURE);
		
		//queue one of each tag from the bottom
		$open  = array_pop($opens[0]);
		$close = array_pop($closes[0]);
		
		$stack = array();
		$output= array();
		while( isset($open) || isset($close) ){
			//If we have a close with no open  or  a close beyond our open
			if( isset($close) && (!isset($open) || $close[1]>$open[1])){
				$stack[]=$close; //Push it
				$close = array_pop($closes[0]);
			} else {
				//Find the hunk name filling $description
				preg_match('@name="([^"]*)"@s', $open[0], $description);
				$current_close = array_pop($stack);
				//Add clean nametag to closes    111111111111111       2222222  /lookahead\ 
				$new_close_string=preg_replace("@(/\*\s*?</hunk)[^>]*?(>\s*\*/)(?!.*</hunk>)@s", '$1 name="'.$description[1].'"$2', $current_close[0]);
				//                                / *    </hunk        >    */
				//                      whitespace only^ Cut away ^       ^whitespace only
				$mod = strlen($new_close_string)-strlen($current_close[0]);
				if($mod!=0){ //if a change occured, modify styles passed by reference
					$style = substr_replace($style, $new_close_string, $current_close[1], strlen($current_close[0]));
				}
				//Adjust the line numbers of anything still on the stack
				$current_close[1]+=$mod;
				foreach($stack as $key=>$val){
					$stack[$key][1]+=$mod;
				}
				//Save the content of the entire hunk to output array under its own name
				$output[$description[1]]=substr($style, $open[1], $current_close[1]-$open[1]+strlen($current_close[0]) );
				$open = array_pop($opens[0]);
			}
		}
		return $output;
	}
	//Here we define the variable assignment grammar of the css engine
	//TODO: Variables can only be re-assigned one time?
	private function compile_css($input_string){
		//Find assignments|      ~Some-var     =  anything~
		//                ~Some-__nested_var__ =  anything~
		$assign_regex = '@~([A-Za-z0-9_\-]+)\s*=\s*([^~]+)~@s';
		preg_match_all( $assign_regex, $input_string, $assignments, PREG_SET_ORDER);
		//All variables are plucked and hoisted       ^^new array^^
		$output = preg_replace( $assign_regex, '', $input_string);
		$vars = array();
		$complex_vars=array();
		foreach($assignments as $assignment){
			//Resolve simple references to previously defined variables
			//  ~Some_var = __var__~
			if(preg_match('@^\_\_([A-Za-z0-9_\-]+)\_\_$@s',$assignment[2],$matches)){
				$vars[$assignment[1]] =& $vars[$matches[1]];
				continue;
			}
			//Set the varable
			$vars[$assignment[1]]=$assignment[2];
			//Check if the variable inherits from another variable.
			// ~Some_var = anything__var__~
			if(preg_match('@\_\_([A-Za-z0-9_\-]+)\_\_@s',$assignment[2])){
				//Dump into temporary array
				$complex_vars[]=$assignment[1];
			}
		}
		//Replace nested variable references with real values
		while( count($complex_vars) > 0){
			foreach($complex_vars as $key=>$var){
				$vars[$var] = preg_replace_callback(
					//  __Some_variable_name__
					'@\_\_([A-Za-z0-9_\-]+)\_\_@s',
					function($matches) use ($vars) { // Undefined variables resolve to red
						return isset($vars[$matches[1]]) ? $vars[$matches[1]] : '#F00';
					},
					$vars[$var]
				);//If all inheritances resolved, remove from queue.
				if(!preg_match('@\_\_([A-Za-z0-9_\-]+)\_\_@s',$var))
					unset($complex_vars[$key]);
			}
		}
		//Replace all variables with real value.
		$output = preg_replace_callback(
			//  __Some_variable_name__
			'@\_\_([A-Za-z0-9_\-]+)\_\_@s',
			function($matches) use ($vars) {
				return isset($vars[$matches[1]]) ? $vars[$matches[1]] : '#F00';
			}, $input_string
		);
		//Remove all variable assignments
		$output = preg_replace("@~([A-Za-z0-9_\-]+)\s*=\s*([^~]+)~@s", '', $output);
		return $output;
	}

	//Invoke controller function if it exists in the project folder and is public
	public function api( $controller='', $method=''){
		$controller = preg_replace( '/[^a-zA-Z0-9_]/', '', $controller);
		$file = $this->source_dir.'controller/'.$controller.'.php';

		if(!file_exists($file)){
			die('No such controller: '.$file);
		}
		include $file;
		$controller = ucfirst($controller);
		$instance = new $controller();

		if(!method_exists( $instance, $method) ) {
			die('No such method.');
		}
		$reflection = new ReflectionMethod($instance, $method);
		if( !$reflection->isPublic() ){
			die('Access Denied.');
		}
		$args = func_get_args();
		$args=array_slice($args,2);
		array_unshift($args, $_POST);
		try{
			call_user_func_array( array($instance, $method), $args);
		} catch (Exception $e){
			die( $e->getMessage() );
		}
		
	}
}
