<?php

require_once 'connect.php';

$title = $_POST['title'];
$desc = $_POST['desc'];



$sql = "INSERT INTO `cart`(`id`, `title`, `de`) VALUES (NULL, '$title', '$desc')";

mysqli_query($connect, $sql);