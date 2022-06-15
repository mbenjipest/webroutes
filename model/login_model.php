<?php
require_once dirname(__FILE__) . '/../db.php';
Class Login_model{
	function __construct(){}

	public static function login( $request ){
		static::validate_login( $request );
		$query='
			SELECT uu.*
			FROM user uu
			WHERE username=:username
		';
		$params=array();
		$params['username']=$request['username'];
		$db = new Db();
		$result = $db->query($query, $params);
		if( $result[0]['hash'] != hash('sha512', $result[0]['salt'].$request['password']) ){
			throw new Exception('Incorrect Password');
		}
		$token = array();
		$token['time']=date("Y-m-d H:i:s");
		$token['user_id']=$result[0]['user_id'];
		$token['ip']=$_SERVER['REMOTE_ADDR'];

		$output = array();
		$output['token']=static::encrypt( json_encode($token) );
		return $output;
	} private static function validate_login( $request ){
		if(!@isset($request['username']) || strlen($request['username'])<2 ){
			throw new Exception('Must set username.');
		} 
		if(!@isset($request['password']) || strlen($request['password'])<1 ){
			throw new Exception('Must set password.');
		}
	}

	public static function create( $request ){
		static::validate_create();
		$salt=static::generate_random(16);

		$query='INSERT INTO user (username, hash, salt) VALUES (:username, :hash, :salt);';
		$params=array();
		$params['username']=$request['username'];
		$params['hash']=hash('sha512', $salt.$request['password']);
		$params['salt']=$salt;
		$db = new Db();
		$db->exec($query, $params);

		return $db->insert_id();
	} private static function validate_create( $request ){
		static::validate_login( $request );
		$db = new Db();
		$query='SELECT count(*) as num FROM user WHERE username=:username';
		$params=array();
		$params['username']=$request['username'];
		$result = $db->query($query, $params);
		if($result[0]['num']>0){
			throw new Exception('Username taken.');
		}
	}

	public static function change_password( $request ){
		static::validate_change_password( $request );
		$salt=static::generate_random(16);

		$query='UPDATE user SET hash=:hash, salt=:salt WHERE username=:username';
		$params=array();
		$params['hash']=hash('sha512', $salt.$request['new_password']);
		$params['salt']=$salt;
		$params['username']=$request['username'];
		$db = new Db();
		$db->exec($query, $params);

		return self::login(['username'=>$request['username'],'password'=>$request['new_password']]);
	} private static function validate_change_password( $request ){
		static::validate_login( $request );
		if(!@isset($request['new_password']) || strlen($request['new_password'])<1 ){
			throw new Exception('Must set new_password.');
		}
		$query='SELECT * FROM user WHERE username=:username;';
		$params=array();
		$params['username']=$request['username'];
		$db = new Db();
		$result = $db->query($query, $params);
		if( empty($result)){
			throw new Exception('Username not found.');
		}
		if( $result[0]['hash'] != hash('sha512', $result[0]['salt'].$request['password']) ){
			throw new Exception('Incorrect Password.');
		}
	}

	public static function get_token( $token ){
		try{
			return json_decode(static::decrypt($token), true);
		} catch (Exception $e){
			return false;
		}
		
	}
	
	public static function get_endpoints( $user_id ){
		$query='
			SELECT IF(ue.endpoint IS NULL, 0, GROUP_CONCAT(ue.endpoint)) AS endpoints
			FROM user_endpoint ue
			WHERE user_id=:user_id
		';
		$params=array();
		$params['user_id']=$user_id;
		$db = new Db();
		$result = $db->query($query, $params);
		if(empty($result)){
			throw new Exception('User does not exist.');
		}
		$endpoints=$result[0]['endpoints']==0?[]:explode(',',$result[0]['endpoints']);//['*/*']

		return $endpoints;
	}

	private static function rand_secure( $min, $max ) {
		$range = $max - $min;
		if ( $range < 0 ) return $min; // not so random...
		$log    = log( $range, 2 );
		$bytes  = (int) ( $log / 8 ) + 1; // length in bytes
		$bits   = (int) $log + 1; // length in bits
		$filter = (int) ( 1 << $bits ) - 1; // set all lower bits to 1
		do {
			$rnd = hexdec( bin2hex( openssl_random_pseudo_bytes( $bytes ) ) );
			$rnd = $rnd & $filter; // discard irrelevant bits
		} while ( $rnd >= $range );
		return $min + $rnd;
	}
	private static function generate_random( $length = 8 ){
		$alphabet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^&*()_+-=[]{}|;:<>?,./';
		$token = '';
		$max   = strlen( $alphabet );
		for ( $i=0; $i < $length; $i++ ) {
			$token .= $alphabet[static::rand_secure( 0, $max )];
		}
		return $token;
	}

	private static function aes_key(){
		//generated with bin2hex( openssl_random_pseudo_bytes(128) );
		return hex2bin('replacedforobviousreasonsfillyourown');
	}
	private static function encrypt( $payload ){
		$key = static::aes_key();
		$ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
		$iv = openssl_random_pseudo_bytes($ivlen);
		$ciphertext_raw = openssl_encrypt($payload, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv);
		$hmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
		$ciphertext = base64_encode( $iv.$hmac.$ciphertext_raw );
		return $ciphertext;
	}
	private static function decrypt( $ciphertext ){
		$key = static::aes_key();
		$c = base64_decode($ciphertext);
		$ivlen = openssl_cipher_iv_length($cipher="AES-128-CBC");
		$iv = substr($c, 0, $ivlen);
		$hmac = substr($c, $ivlen, $sha2len=32);
		$ciphertext_raw = substr($c, $ivlen+$sha2len);
		$payload = openssl_decrypt($ciphertext_raw, $cipher, $key, $options=OPENSSL_RAW_DATA, $iv);
		$calcmac = hash_hmac('sha256', $ciphertext_raw, $key, $as_binary=true);
		if (hash_equals($hmac, $calcmac)){ //PHP 5.6+ timing attack safe comparison
			return $payload;
		} else {
			throw new Exception('Decrpyt failed, invalid token.');
		}
	}
}
