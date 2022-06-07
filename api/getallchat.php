<?php
include_once("config.php");

$sql = '';
$sql = "SELECT customer_id,message,timestamp,type FROM message ORDER BY timestamp";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
