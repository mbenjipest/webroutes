<?php
require_once dirname(__FILE__) . '/../model/login_model.php';
Class Proxy{
	private static $url   = 'https://michaelb.pestroutes.com/api/';
	private static $key   = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
	private static $token = '1111111111111111111111111111111111111111111111111111111111111111';
	function __construct(){}

	public static function send( $request, $endpoint, $action){
		try{
			$request['authenticationKey']  =self::$key;
			$request['authenticationToken']=self::$token;
			if(!@isset($request['login_token'])){
				throw new Exception('User must be logged in to use proxy');
			}
			$token = Login_model::get_token($request['login_token']);
			if($token==false){
				throw new Exception('Bad login token');
			}
			$endpoint_grants=Login_model::get_endpoints($token['user_id']);
			
			$endpoints=[];//'*'=>'*'
			foreach($endpoint_grants as $grant){
				$parts=explode('/', $grant);
				if(!@isset($endpoints[$parts[0]])){
					$endpoints[$parts[0]]=[];
				}
				$endpoints[$parts[0]][]=$parts[1];
			}
			if(
				(@isset($endpoints['*'])&&(in_array('*', $endpoints['*']) || in_array($endpoint, $endpoints['*'])))
				||(@isset($endpoints[$endpoint])&&(in_array('*', $endpoints['*']) || in_array($endpoint, $endpoints[$endpoint])))
			){
				//woohoo authorized
			}else{
				throw new Exception('User does not have access to call this endpoint/action.');
			}
			
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
}