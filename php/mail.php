<?php
// get input data
$name = $_POST["name"];
$secname = $_POST["secname"];
$phone = $_POST["phone"];
$email = $_POST["email"];
$address = $_POST["address"];

$EmailTo = "mail@mail.ru";
$Subject = "Пользователь произвел оплату";
 
// prepare email body text
$Body .= "Пользователь произвел оплату \n\n";
$Body .= "Имя: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Фамилия:";
$Body .= $secname;
$Body .= "\n";
$Body .= "Телефон: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Адрес: ";
$Body .= $address;
$Body .= "\n";

 
// send email
$success = mail($EmailTo, $Subject, $Body, "From:"."mail@mail.ru");
 
// echo result
if ($success){
   echo "success";
}else{
    echo "invalid";
}
 
?>