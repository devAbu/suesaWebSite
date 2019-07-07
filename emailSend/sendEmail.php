<?php

$fullName = $_REQUEST["fullName"];
$email = $_REQUEST["email"];
$phoneNumber = $_REQUEST["phoneNumber"];
$message = $_REQUEST["message"];

if ($_REQUEST['task'] == "message") {

    $admin_email = "abdulrahman.almonajed@gmail.com";

    //send email
    mail($admin_email, "$fullName", $message, "From:" . $email);
    if (mail($admin_email, "$fullName", $message, "From:" . $email)) {
        echo ('sent');
    } else {
        echo ('ne radi');
    }
}
