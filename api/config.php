<?php
header("Access-Control-Allow-Origin: *");
header("Content-type:*/*");
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$db_username = 'spl';
$db_password = 'spl123';
$db_name = 'spl';
$db_host = 'localhost';
$mysqli = new mysqli($db_host, $db_username, $db_password, $db_name);

if ($mysqli->connect_error) {
    die('Error : (' . $mysqli->connect_errno . ') ' . $mysqli->connect_error);
}
