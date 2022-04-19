<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $mobileNumber = mysqli_real_escape_string($mysqli, (int)$request->mobileNumber);
    $jobId = mysqli_real_escape_string($mysqli, trim($request->jobId));
    $password = mysqli_real_escape_string($mysqli, (int)$request->password);
    $sql = "INSERT INTO sysadmin(username,mobileNumber,jobId,password) VALUES ('{$username}','{$mobileNumber}','{$jobId}','{$password}')";
    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $username,
            'mobileNumber' => $mobileNumber,
            'jobId' => $jobId,
            'password' => $password
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
