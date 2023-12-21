<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $subject = $_POST["subject"];
  $message = $_POST["message"];

  $to = "jeffgraphics254@gmail.com";
  $subject = "New Form Submission: $subject";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    echo "Your message has been sent successfully!";
  } else {
    echo "Error sending the message. Please try again later.";
  }
} else {
  echo "Invalid request method.";
}
?>

