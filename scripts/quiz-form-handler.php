<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if (isset($data['page']) && isset($data['time']) && isset($data['contact']['contact_context']) && isset($data['contact']['contact_way']) && isset($data['contact']['name']) && isset($data['contact']['contact_way'])) {

    // $db_connection = new mysqli('localhost:3306', 'wizartge_accounting2', '&JEa@--0tk.t', 'wizartge_accounting2') OR DIE("Соединение не установленно");
    // $db_connection = new mysqli('localhost', 'wizartge_accounting_jara_promo', 'f#u2pN5phfLR', 'wizartge_accounting_jara_promo') OR DIE("Соединение не установленно");
    $db_connection = new mysqli('localhost', 'root', 'root', 'accounting_database') OR DIE("Соединение не установленно");
    $db_connection->set_charset("utf8");

    $page =  $data['page'];
    $time_and_date = $data['time'];

    $contact_context = $data['contact']['contact_context'];
    $contact_address = $data['contact']['contact_way'];
    $name = $data['contact']['name'];
    // $vat_status = $data['contact']['vat_status'];

    $seal = $data['seal'];
    $price = $data['price'];
    $personal = $data['personal'];

    $register_type_name = $data['registerType']['name'];

    if (isset($data['employee_number']) && isset($data['incoming_invoices']) && isset($data['outcoming_invoices']) && isset($data['vat_status'])) {
        $employee_number = strval($data['employee_number']);
        $incoming_invoices = strval($data['incoming_invoices']);
        $outcoming_invoices = strval($data['outcoming_invoices']);
        $vat_status = $data['vat_status'];
    } else {
        $employee_number = '-';
        $incoming_invoices = '-';
        $outcoming_invoices = '-';
        $vat_status = '-';
    }

    switch ($register_type_name) {
        case 'mk':
            $register_type_name = "международная компания";
            break;
        case 'ooo':
            $register_type_name = "OOO";
            break;
        case 'ooo_virtual':
            $register_type_name = "OOO со статусом виртуальной зоны";
            break;
        case 'nko':
            $register_type_name = "НКО";
            break;
        case 'ao':
            $register_type_name = "АО";
            break;
         case 'individual_entrepreneur':
            $register_type_name = "индивидуальное предпринимательство";
            break;
    }

    
    $p_page = $db_connection->escape_string($contact_context);
    $p_time_and_date = $db_connection->escape_string($time_and_date);

    $p_contact_context = $db_connection->escape_string($contact_context);
    $p_contact_address = $db_connection->escape_string($contact_address);
    $p_name = $db_connection->escape_string($name) ;
    $p_vat_status = $db_connection->escape_string($vat_status);

    $p_seal = $db_connection->escape_string($seal);
    $p_price = $db_connection->escape_string($price);
    $p_personal = $db_connection->escape_string($personal) ;

    $p_register_type_name = $db_connection->escape_string($register_type_name);


    $sql_query = "INSERT INTO `quiz_data` VALUES (NULL, '$p_page', '$p_contact_context', '$p_contact_address', '$p_name', '$p_vat_status', '$p_time_and_date', '$p_register_type_name', '$p_personal', '$p_seal', '$p_price');";

    
    
    $telegram_token = '5295471504:AAFisPDnZuo_ckEdPw1AK4U8gwvs4ADtZWw';
    $telegram_chat_id = '-748677163';

    if ($personal == 'true') {
        $personal = 'c личным присутствием';
    } else if ($personal == 'false') {
        $personal = 'удаленно';
    }
    
    $telegram_message = 'Новая заявка со страницы '.$page.'
    ------------------------------------------------------
    Время заявки: '.$time_and_date.' 
    Заявку Оставил: '.$name.' 
    Хочет связаться через  '.$contact_context.' 
    Хочет открыть '.$register_type_name.' '.$personal.' 
    Нужна ли печать: '.$seal.' 
    Адрес для связи '.$contact_address.'
    Предварительная стоимость: '.$price.'
    ';
    
    $url="https://api.telegram.org/bot".$telegram_token;
    $params=[
        'parse_mode' => 'HTML',
        'chat_id'=>$telegram_chat_id, 
        'text'=>$telegram_message,
    
    ];
    $ch = curl_init($url . '/sendMessage');
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    // $result = curl_exec($ch);
    curl_close($ch);

    $p_page = $db_connection->real_escape_string($page);
    $p_contact_context = $db_connection->real_escape_string($contact_context);
    $p_name = $db_connection->real_escape_string($name);
    $p_employee_number = $db_connection->real_escape_string($employee_number);
    $p_incoming_invoices = $db_connection->real_escape_string($incoming_invoices);
    $p_outcoming_invoices = $db_connection->real_escape_string($outcoming_invoices);
    $p_vat_status = $db_connection->real_escape_string($vat_status);
    $p_time_and_date = $db_connection->real_escape_string($time_and_date);
  
    
    $sql_query = "INSERT INTO `quiz_data` VALUES (NULL, '$p_page', '$p_contact_context', '$contact_address', '$p_name', '$vat_status', '$time_and_date', '$register_type_name', '$personal', '$seal', '$price');";

    
    $database_request = mysqli_query($db_connection, $sql_query);
    

    require_once 'mail_service/src/PHPMailer.php';
    require_once 'mail_service/src/SMTP.php';
    require_once 'mail_service/src/Exception.php';
    $mail = new PHPMailer;
    
    try {         
        $mail->isSMTP();                                           
        $mail->Host       = 'smtp.gmail.com';                   
        $mail->SMTPAuth   = true;                                   
        $mail->Username   = 'jaranotificationsacc@gmail.com';                     
        $mail->Password   = 'M50VxnO35U5p';                               
        $mail->SMTPSecure = 'tls';        
        $mail->Port       = 587;                                   
    
        $mail->setFrom('jaranotificationsacc@gmail.com', 'Jara Accounting');
        $mail->addAddress('vartopick@gmail.com', 'notifications');
        // $mail->addAddress(' accounting@jara.ge', 'notifications');
        // $mail->addAddress('28769353.116659@parser.amocrm.ru', 'notifications');
        $mail->isHTML(true);
        $mail->Subject = 'New Request';
        $mail->Body    = ' 
                <h1>Новая заявка со страницы <b>'.$page.'</b> </h1>
                <p>Время заявки: <b>'.$time_and_date.'</b></p>
                <p>Заявку Оставил: <b>'.$name.'</b> </p>
                <p>Хочет связаться через  <b>'.$contact_context.'</b> </p>
                <p>Адрес для связи: <b>'.$contact_address.'</b></p>
                <p>Хочет открыть <b>'.$register_type_name.' '.$personal.'</b></p> 
                <p>Нужна ли печать: <b>'.$seal.'</b></p> 
                <p>Предварительная стоимость: <b>'.$price.'</b></p>
         ';
        $mail->AltBody = $telegram_message;
    
        $mail->send();
    } catch (Exception $e) {
        echo $e;
    }


    // if ($database_request) {
    //     echo '<div class="block_title">Успешно!</div><p>Ваша заявка успешно отправлена!</p><p>Наши специалисты свяжутся с вами в ближайшее время.</p>';
    // } 
} else {
    echo '<div class="block_title">Ошибка!</div><p>К сожалению, на сервере произошла ошибка.</p> <p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p>';
}




?>