<?php

class user(){

    public $email;
    public $username;
    public $password;

    public function setEmail($email){
            $this->email=$email;
    }

    public function getEmail(){
        return $this->email;
    }

    public function setUsername($username){
        $this->username=$username;
}

    public function getUsername(){
        return $this->username;
    }

    public function setPassword($password){
        $this->password=$password;
}

    public function getPassword(){
        return $this->password;
    }
}


?>