<?php
//This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License
// http://creativecommons.org/licenses/by-sa/4.0/

/* .htaccess file
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php?/$1 [L]
*/
$instance = new Proxy();
Class Proxy{
	private static $url   = 'https://stagingdemo.pestroutes.com/api/';
	private static $key   = 'x88492884d8154febd1057372867c2e34b371d8fb';
	private static $token = 'x6915e71f53708f17dba090febd2df4f9d79364d7';
	
	// URL handler - Passes parts to function arguments - domain.com/function/arg1/arg2?query=string
	function __construct(){
		//Get arguments from the path
		$request_parts=explode('?',$_SERVER['REQUEST_URI']);
		$request_uri=$request_parts[0];
		//We don't do anything with the query string as we use POST, but you could decode
		$query_string=@isset($request_parts[1])?$request_parts[1]:''; 
		$args=explode('/', str_replace('index.php/','',$request_uri) );
		
		if($args[0]=='')
		  array_shift($args); // we don't need this bit if it's empty
		$function = preg_replace("/[^A-Za-z0-9 _\-]/", '', array_shift($args) );//Sanitize the function name
		if($function==''){ //no uri, retrieve an app shell (html file)
			$this->index();
		}else if( method_exists( $this, $function) ){ //If it's a public method below, invoke it
			$reflection = new ReflectionMethod($this, $function);
			if( $reflection->isPublic() )
				call_user_func_array( array($this, $function), $args );
		}
	}
	public static function send( $request, $endpoint, $action){
		try{
			$request['authenticationKey']  =self::$key;
			$request['authenticationToken']=self::$token;
			
			$url = self::$url.$endpoint.'/'.$action;
			
			$ch = curl_init($url);
			curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($request));
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$result = curl_exec($ch);
			$result=json_decode($result, true);
			$result['params']['authenticationKey']='xxx';
			$result['params']['authenticationToken']='xxx';
			
			die(json_encode($result));
		} catch(Exception $e){
			die(json_encode([
				'success'=>false,
				'errorMessage'=>'Proxy: '.$e->getMessage()
			]));
		}
	}
	public function index(){
		echo 'Hello World';//include 'homepage.php';
	}
}