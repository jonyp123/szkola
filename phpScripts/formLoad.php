<?php

echo '<?php
$dbServername = "serwer2220135.home.pl";
$dbUsername = "36458026_database";
$dbPassword = "JezusMaryjaNiebolicieszyja";
$dbName = "36458026_database";

$conn = mysqli_connect($dbServername, $dbUsername, $dbPassword,$dbName);
$result = mysqli_query($conn, "SELECT * FROM user");
$information =  mysqli_fetch_all($result, MYSQLI_ASSOC);

print_r($information[0]["userLogin"]);


?>

<!DOCTYPE html>
<html>
    <head>
      <script src="./js/scripts.js"></script>
      <link rel="stylesheet" href=".\.\projekt.css">
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet">      <div class="wave">
        <script src="https://kit.fontawesome.com/ce0f4fdcb1.js" crossorigin="anonymous"></script>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
        </svg>
    </div>
    </head>
    <body>
    <div class="container" id="loginContainer">
        <i class="fa-solid fa-code fa-2xl"></i>
        <form class="" action="phpScripts\formLoad.php" method="post">
          <button class="btn-1" type="submit"><a>Register</a></button>
          <button class="btn-1" type="submit"><a>Log in</a></button>
          <div class="login" id="loginForm">
          <form onsubmit="handleRegisterSubmit()">
              <div class="txt">
                  <input type="text" required>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt">
                  <input type="password" id="password" required>
                  <span></span>
                  <label>Password</label>
              </div>
              <div class="txt">
                  <input type="password" id="repeatPassword" required>
                  <span></span>
                  <label>Repeat password</label>
              </div>
              <button class="submit" type="submit">Register</button>
          </form>
          </div>
        </form>

    </div>

<footer>

</footer>
    </body>
</html>';

?>
