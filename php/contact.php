<?php 
	$to = 'byto.faouzi@gmail.com';

	$subject = "This is an email from (a Robotic site visitor)";

	$message = $_POST['textarea'];

	$headers = "From : ".$_POST['fname']." ".$_POST['lname']."<".$_POST['email'].">\r\n";
	$headers .= "Reply-To: ".$_POST['email']."\r\n";
	$headers .= "Content-type: text/html\r\n";

	mail($to,$subject,$message,$headers);
 ?>
