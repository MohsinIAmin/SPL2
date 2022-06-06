<?php
include_once("config.php");

$sql = "SELECT username,mobileNumber, address, password, type, package_id FROM customer ORDER BY customer.username";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
