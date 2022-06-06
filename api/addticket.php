<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $description = mysqli_real_escape_string($mysqli, trim($request->description));
    $customer_id = mysqli_real_escape_string($mysqli, trim($request->customer_id));
    $p_type = mysqli_real_escape_string($mysqli, trim($request->p_type));
    $timestamp = mysqli_real_escape_string($mysqli, trim($request->timestamp));

    $sql = "INSERT INTO ticket(description,customer_id,p_type,timestamp,status) VALUES ('{$description}','{$customer_id}','{$p_type}','{$timestamp}', 'pending')";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'description' => $description,
            'customer_id' => $customer_id,
            'p_type' => $p_type,
            'timestamp' => $timestamp
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
