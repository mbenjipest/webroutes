<?php
require_once dirname(__FILE__) . '/../model/login_model.php';
Class Login{
	function __construct(){}

	public static function login( $request ){
		
		try{
			die( json_encode( Login_model::login($request) ) );
		} catch (Exception $e){
			die( json_encode( array('Error'=>true, 'Error_message'=>$e->getMessage()) ) );
		}
	}

	public static function create( $request ){
		try{
			die( json_encode( Login_model::create($request) ) );
		} catch (Exception $e){
			die( json_encode( array('Error'=>true, 'Error_message'=>$e->getMessage()) ) );
		}
	}

	public static function change_password( $request ){
		try{
			die( json_encode( Login_model::change_password($request) ) );
		} catch (Exception $e){
			die( json_encode( array('Error'=>true, 'Error_message'=>$e->getMessage()) ) );
		}
	}

	public static function whoami( $request ){
		try{
			$token = Login_model::get_token($request['token']);
			if($token===false){ throw new Exception('Invalid token.');}
			die( json_encode( $token['user_id'] ) );
		} catch (Exception $e){
			die( json_encode( array('Error'=>true, 'Error_message'=>$e->getMessage()) ) );
		}
	}
}
