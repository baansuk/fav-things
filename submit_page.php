<?php
file_put_contents('../'.favthingslist.txt, $_GET['favthing']);
header('Location:/mainpage')
?>