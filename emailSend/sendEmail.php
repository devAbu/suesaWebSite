<?php

$fullName = $_REQUEST["fullName"];
$email = $_REQUEST["email"];
$phoneNumber = $_REQUEST["phoneNumber"];
$message = $_REQUEST["message"];

if ($_REQUEST['task'] == "message") {

    $admin_email = "mersad@suessa.com";
    $admin_email2 = "info@suessa.com";

    //send email
    mail($admin_email, "$fullName", $message, "From:" . $email);
    if (mail($admin_email, "$fullName", $message, "From:" . $email)) {
        mail($admin_email2, "$fullName", $message, "From:" . $email);
        if(mail($admin_email2, "$fullName", $message, "From:" . $email)){
            echo ('sent');
        }else{
            echo ('drugi mail ne radi');
        }
    } else {
        echo ('ne radi');
    }
}
