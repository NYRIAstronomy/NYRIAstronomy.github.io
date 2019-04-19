<?php
if($_POST["message"]) {
    mail("astro.instrumentation@gmail.com", "Form to email message", $_POST["subject"], "From: an@email.address");
}
?>
