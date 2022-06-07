<?php

use Pusher\Pusher;

require __DIR__ . '/vendor/autoload.php';

include_once("config.php");
$postdata = file_get_contents("php://input");
$data = json_decode($postdata);

if (isset($postdata) && !empty($postdata)) {
    $customer_id = mysqli_real_escape_string($mysqli, trim($data->customer_id));
    $message = mysqli_real_escape_string($mysqli, trim($data->message));
    $timestamp = mysqli_real_escape_string($mysqli, trim($data->timestamp));

    $sql = "INSERT INTO message(customer_id,message,timestamp) VALUES ('{$customer_id}','{$message}','{$timestamp}')";
    if ($mysqli->query($sql) === TRUE) {
        $data = [
            'customer_id' => $customer_id,
            'message' => $message,
            'timestamp' => $timestamp
        ];

        $options = array(
            'cluster' => 'ap2',
            'useTLS' => true
        );

        $pusher = new Pusher(
            '4a35f3bd8516c1927850',
            'd680dd54c8ebf0d078df',
            '1419956',
            $options
        );

        $pusher->trigger('my-channel', 'my-event', $data);
        
    } else {
        http_response_code(404);
    }
}
