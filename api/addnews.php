<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $description = mysqli_real_escape_string($mysqli, trim($request->description));
    $heading = mysqli_real_escape_string($mysqli, trim($request->heading));
    $operator_id = mysqli_real_escape_string($mysqli, trim($request->operator_id));
    $timestamp = mysqli_real_escape_string($mysqli, trim($request->timestamp));
    
    $sql = "INSERT INTO news(description,heading,operator_id,timestamp) VALUES ('{$description}','{$heading}','{$operator_id}','{$timestamp}')";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'description' => $description,
            'heading' => $heading,
            'operator_id' => $operator_id,
            'timestamp'=>$timestamp
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
