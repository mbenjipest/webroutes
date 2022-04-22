<?php
Class Db{
	private $server   = "/tmp/mysql8.sock";
	private $username = "fieldroutes";
	private $password = "";
	private $database = "mbenji_fieldroutes";
	private $connection;
	private $statement;

	function __construct(){
		//$this->connection = new PDO("mysql:host=".$this->server.";dbname=".$this->database, $this->username, $this->password);
		try{$this->connection = new PDO("mysql:unix_socket=".$this->server.";dbname=".$this->database."", $this->username, $this->password);}
		catch(Exception $e){
			throw $e;
		}
		$this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$this->connection->exec("set time_zone = '+00:00';");
		
	}
	public function query( $query, $params = array() ){
		try{
			$this->exec( $query, $params );
			return $this->statement->fetchAll(PDO::FETCH_ASSOC);
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
			print_r( $this->statement->errorInfo() );
			die();
		}
	}
	public function exec( $query, $params = array() ){
		try{
			$this->statement = $this->connection->prepare( $query );
			foreach( $params as $key=> $value ){
				// Determine type
				if(is_int($value)){
					$type = PDO::PARAM_INT;
				} else if( is_bool($value) ){
					$type = PDO::PARAM_BOOL;
				} else if( is_null($value) ){
					$type = PDO::PARAM_NULL;
				} else if( is_string($value) ){
					$type = PDO::PARAM_STR;
				} else{
					$type = FALSE;
				}
				if( is_int($key) ){ // ? type bind
					$this->statement->bindValue($key+1,$value,$type);
				} else { // :param type bind
					$this->statement->bindValue(":$key",$value,$type);
				}
			}
			$this->statement->execute();
		} catch(PDOException $e) {
			echo "Error: " . $e->getMessage();
			die();
		}
	}
	public function insert_id(){
		return $this->connection->lastInsertId();
	}
	public static function debug($query, $params = null) {
		if(empty($params)){
			return $query;
		}
		$indexed = $params == array_values($params);
		foreach($params as $k=>$v){
			if(is_object($v)){
				if ($v instanceof \DateTime) $v = $v->format('Y-m-d H:i:s');
				else continue;
			}
			elseif (is_string($v)) $v="'$v'";
			elseif ($v === null) $v='NULL';
			elseif (is_array($v)) $v =implode(',', $v);

			if($indexed){
				$query = preg_replace('/\?/', $v, $query, 1);
			}else{
				if($k[0] != ':') $k=':'.$k; //add leading colon if it was left out
				$query = str_replace($k,$v,$query);
			}
		}
		return $query;
	}
}