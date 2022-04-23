<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

if (isset($data['page']) && isset($data['context']) && isset($data['contact_way']) && isset($data['name']) && isset($data['time'])) {

    // $db_connection = new mysqli('localhost:3306', 'wizartge_accounting2', '&JEa@--0tk.t', 'wizartge_accounting2') OR DIE("Соединение не установленно");
    // $db_connection = new mysqli('localhost', 'wizartge_accounting_jara_promo', 'f#u2pN5phfLR', 'wizartge_accounting_jara_promo') OR DIE("Соединение не установленно");
    $db_connection = new mysqli('localhost', 'root', 'root', 'accounting_database') OR DIE("Соединение не установленно");

    $db_connection->set_charset("utf8");

    $page = strval($data['page']);
    $contact_context = strval($data['context']);
    $contact_address = $data['contact_way'];
    $name = strval($data['name']);
    $time_and_date = strval($data['time']);


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
    
    
    
    $telegram_token = '5295471504:AAFisPDnZuo_ckEdPw1AK4U8gwvs4ADtZWw';
    $telegram_chat_id = '-748677163';
    
    $telegram_message = '
        Новая заявка со страницы '.$page.'
        ------------------------------------------------------
        Время заявки: '.$time_and_date.'
        Заявку Оставил: '.$name.'
        Хочет связаться через  '.$contact_context.'
        Адрес для связи: '.$contact_address.'
        Количество сотрудников: '.$employee_number.' 
        Исходящие инвойсы: '.$incoming_invoices.' 
        Входящие инвойсы: '.$outcoming_invoices.'
    ';
    
    $url="https://api.telegram.org/bot".$telegram_token;
    
    $params=[
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
    $p_contact_address = $db_connection->real_escape_string($contact_address);
    $p_name = $db_connection->real_escape_string($name);
    $p_employee_number = $db_connection->real_escape_string($employee_number);
    $p_incoming_invoices = $db_connection->real_escape_string($incoming_invoices);
    $p_outcoming_invoices = $db_connection->real_escape_string($outcoming_invoices);
    $p_vat_status = $db_connection->real_escape_string($vat_status);
    $p_time_and_date = $db_connection->real_escape_string($time_and_date);
  
    
    $sql_query = "INSERT INTO `form_data` VALUES (NULL, '($p_page)', '$p_contact_context', '$contact_address', '$p_name', '$p_employee_number', '$p_incoming_invoices', '$p_outcoming_invoices', '$p_vat_status', '$p_time_and_date');";
    
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
                <p>Адрес для связи  <b>'.$contact_address.'</b> </p>
                <p>Количество сотрудников: <b>'.$employee_number.'</b> </p>
                <p>Исходящие инвойсы: <b>'.$incoming_invoices.'</b> </p>
                <p>Входящие инвойсы: <b>'.$outcoming_invoices.'</b></p>
         ';
        $mail->AltBody = $telegram_message;
    
        $mail->send();
    } catch (Exception $e) {

    }



    if ($database_request) {
        echo '<div class="popup"><div class="block_title">Успешно!</div><p>Ваша заявка успешно отправлена!</p><p>Наши специалисты свяжутся с вами в ближайшее время.</p><div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div></div>';
    } 
} else {
    echo '<div class="popup"><div class="block_title">Ошибка!</div><p>К сожалению, на сервере произошла ошибка.</p> <p>Пожалуйста, повторите попытку позже или свяжитесь с нами по телефону <a href="tel:+995598888118">+995 598 888 118</a></p><div class="popup_close"><img src="images/icons/close_popup.svg" alt="" /></div></div>';
}




?>