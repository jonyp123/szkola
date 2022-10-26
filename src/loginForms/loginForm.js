const loginForm = () => {

  return (  
    <>
      <form>
              <div class="txt">
                  <input type="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt">
                  <input type="password" id="password" required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <div class="txt">
                  <input type="password" id="repeatPassword" required/>
                  <span></span>
                  <label>Repeat password</label>
              </div>
              <button class="submit" type="submit">Register</button>
          </form>
    </>
  );
}
 
export default loginForm;