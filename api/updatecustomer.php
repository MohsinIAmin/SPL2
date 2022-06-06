<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $type = mysqli_real_escape_string($mysqli, trim($request->type));
    $package_id = mysqli_real_escape_string($mysqli, trim($request->package_id));
    $sql = "UPDATE customer SET type = '{$type}', package_id = '{$package_id}' WHERE customer.username = '{$username}'";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $name,
            'type' => $speed,
            'package_id' => $cost
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
