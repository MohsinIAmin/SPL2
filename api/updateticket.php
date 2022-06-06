<?php
include_once("config.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
    $ticket_id = mysqli_real_escape_string($mysqli, trim($request->ticket_id));
    $status = mysqli_real_escape_string($mysqli, trim($request->status));
    $sql = "UPDATE ticket SET status = '{$status}' WHERE ticket.ticket_id = '{$ticket_id}'";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'name' => $ticket_id,
            'status' => $status
        ];
        echo json_encode($authdata);
    } else {
        http_response_code(404);
    }
}
