<?php
$dbServername = "serwer2220135.home.pl";
$dbUsername = "36458026_database";
$dbPassword = "JezusMaryjaNiebolicieszyja";
$dbName = "36458026_database";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword,$dbName);
$result = mysqli_query($conn, "SELECT * FROM user");
$information =  mysqli_fetch_all($result, MYSQLI_ASSOC);
 
print_r($information[0]["userLogin"]);
?>

<script>
alert(<?= print_r($information[0]["userLogin"]); ?>)
</script>