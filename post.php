<!DOCTYPE html>
<html style=" height: 85%;" >
<head>
	<meta charset="utf-8">
	<title>Post Email</title>
	<link rel="stylesheet" href="assets/css/main.css" />
</head>
<body>

	<section style="padding-top: 15em;" class="wrapper style3 special fade-up">
		<div class="container">
		<header class="">
			<h3><strong>Thanks for sending!</strong></h3>
			<a class="button" href="index.html">Return To Portfolio</a>
		</header>
		</div>
	</section>
	<?php
		$myEmailAddress = "abrahamthiao@gmail.com";
		$subject = "Email from your portfolio!";

		$name = $_POST['Name'];
		$email = $_POST['Email'];
		$message = $_POST['Message'];

		mail($myEmailAddress, $subject, $message, $header);

	?>

</body>
</html>