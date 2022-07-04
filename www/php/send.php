<?php
// Файлы phpmailer
require '/PHPMailer.php';
require '/SMTP.php';
require '/Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$text = $_POST['text'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'everadmailserver@gmail.com'; // Логин на почте
    $mail->Password   = 'Everadmailserver1'; // Пароль на почте
    
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('everadmailserver@email.com', 'Vitaliss web-site'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('s.alekseenko@everad.com');

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Vitaliss';
    $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $phone<br>";
// Проверяем отравленность сообщения
    if ($mail->send()) {
        // редірект, щоб залишитись на поточній сторінці
        // $redirect = isset($_SERVER['HTTP_REFERER'])? $_SERVER['HTTP_REFERER']:'redirect-form.html';
        // header("Location: $redirect");
        // exit();
    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

