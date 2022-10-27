import React from "react";

const loginForm = () => {

  return (  
    <>
      <div className="loginForm">
        <form>
              <div class="txt">
                  <input type="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div class="txt">
                  <input type="password" required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <button class="submit" type="submit"> Login </button>
          </form>
      </div>   
    </>
  );
}
 
export default loginForm;