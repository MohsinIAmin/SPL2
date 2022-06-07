<?php
include_once("config.php");

$sql = "SELECT customer_id,p_type,description,timestamp,status,ticket_id FROM ticket ORDER BY timestamp DESC";
if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
        $rows[] = $row;
    }
    echo json_encode($rows);
} else {
    http_response_code(404);
}

