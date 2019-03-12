<?php

$postArr = array(
	"userName" => "name-api",
	"password" => "password",
	"orderNumber" => $_POST["orderNumber"],
	"returnUrl" => "http://hairdorablesofficial.ru/thankyou.html",
	"amount" => $_POST["amount"]
);
// getting data from sberbank server
$postString = http_build_query($postArr);

// PECL Connection
$url = "https://3dsec.sberbank.ru/payment/rest/register.do";
   
$response = http_post_data($url, $postString);

$pattern = '/\{(?:[^{}]|(?R))*\}/';

preg_match_all($pattern, $response, $matches);

print($matches[0][0]);

?>