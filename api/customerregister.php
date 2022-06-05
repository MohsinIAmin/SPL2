<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $username = mysqli_real_escape_string($mysqli, trim($request->username));
    $mobileNumber = mysqli_real_escape_string($mysqli, trim($request->mobileNumber));
    $address = mysqli_real_escape_string($mysqli, trim($request->address));
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $type = 'deactive';
    $sql = "INSERT INTO customer(username,mobileNumber,address,password,type) VALUES ('{$username}','{$mobileNumber}','{$address}','{$password}','{$type}')";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $username,
            'mobileNumber' => $mobileNumber,
            'address' => $address,
            'password' => $password,
            'type'    => $type
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
