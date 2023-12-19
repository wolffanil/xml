<?php

require_once "connect.php";

$sql = "SELECT * FROM `cart`";

$res = mysqli_query($connect, $sql);


while($item = mysqli_fetch_assoc($res)) {
    echo "<h2>".$item['title'] ."</h2>";
    echo "<p>".$item['de']."</p>";
}