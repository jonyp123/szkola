
function register (){
  loginForm.innerHTML =
          `<form onsubmit="handleRegisterSubmit()">
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
          </form>`
  document.getElementById('loginContainer').style.height = '360px';
}
// to samo co wyzej, tylko w przypadku loginu
function login() {
  loginForm.innerHTML =
          `<form>
              <div class="txt">
                  <input type="text" required>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt">
                  <input type="password" required>
                  <span></span>
                  <label>Password</label>
              </div>
              <input class="submit" type="submit" value="Login">
          </form>`
          //dokument ustawi wysokosc okienka o ID loginContainer
  document.getElementById('loginContainer').style.height = '300px';
}
//funkcja odpowiedzialna za zatwierdzenie arkusza, jesli haslo jest mniejsze od 8 to ustaw na tamto i jesli password.value i repeatPassword.value sie nie zgadzaja to tez wyswietl na blad
function handleRegisterSubmit() {
  if(document.getElementById("password").value.length <= 7){
    loginForm.innerHTML =
            `<form onsubmit="handleSubmit()">
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
                <p>Password is too short! </br>Please use at least 8 characters</p>
                <div class="txt">
                    <input type="password" id="repeatPassword" required>
                    <span></span>
                    <label>Repeat password</label>
                </div>
                <button class="submit" type="submit">Register</button>
            </form>`
    document.getElementById('loginContainer').style.height = '400px';
  }else if(document.getElementById("password").value != document.getElementById("repeatPassword").value){
    loginForm.innerHTML =
            `<form onsubmit="handleSubmit()">
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
                <p>Passwords doesn't match!</p>
                <button class="submit" type="submit">Register</button>
            </form>`
    document.getElementById('loginContainer').style.height = '400px';
  }
}
