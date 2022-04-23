<?php

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if (isset($data['url'])) {
    $html = file_get_contents($data['url']);
    echo $html;
}



?>