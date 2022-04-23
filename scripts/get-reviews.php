<?php
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, 'https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJ9VAqqT9zREARGcW-QmBSweQ&fields=name%2Crating%2Cformatted_phone_number%2Creviews&key=AIzaSyDC8I-ZBAcpv7EQ0NM_kjPVyB_AnHQPCxs');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $output = (curl_exec($ch));
    curl_close($ch);     
    echo $output;
?>