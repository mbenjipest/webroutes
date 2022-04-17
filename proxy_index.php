<?php
//This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License
// http://creativecommons.org/licenses/by-sa/4.0/

$instance = new Router();
Class Router{
	// URL handler - Passes parts to function arguments - domain.com/function/arg1/arg2?query=string
	function __construct(){
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
		}
	}
	public function index(){
		echo 'hello world';
	}
	//Invoke controller function if it exists in the project folder and is public
	public function api( $controller='', $method=''){
		$controller = preg_replace( '/[^a-zA-Z0-9_]/', '', $controller);
		$file = 'controller/'.$controller.'.php';

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
