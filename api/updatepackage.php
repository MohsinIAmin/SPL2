<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $name = mysqli_real_escape_string($mysqli, trim($request->name));
    $speed = mysqli_real_escape_string($mysqli, trim($request->speed));
    $cost = mysqli_real_escape_string($mysqli, trim($request->cost));
    $sql = "UPDATE package SET speed = '{$speed}', cost = '{$cost}' WHERE package.name = '{$name}'";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'name' => $name,
            'speed' => $speed,
            'cost' => $cost
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
