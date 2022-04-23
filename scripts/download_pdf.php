<?php

// $postData = file_get_contents('php://input');
// $data = json_decode($postData, true);

$url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$components = parse_url($url);
parse_str($components['query'], $pdf_data);


if (isset($pdf_data['type']) && isset($pdf_data['name'])) {

    function download_file($file, $name) {
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename=' . $name);
        exit(readfile($file));
    }
    download_file('../documents/'.$pdf_data['type'].'.pdf', ''.$pdf_data['name'].'.pdf');

} else {
    print_r($pdf_data);
}



?>