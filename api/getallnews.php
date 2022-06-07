<?php
include_once("config.php");
header("Access-Control-Allow-Origin: *");
$sql = "SELECT description,heading,operator_id,timestamp FROM news ORDER BY timestamp DESC";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}
