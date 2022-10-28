import React from "react";
import App from "../App";
import {useForm} from "react-hook-form"


const loginForm = () => {



  return (  
    <>
      <div className="loginForm">
        <form>
              <div className="txt">
                  <input type="text" required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div className="txt">
                  <input type="password" required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <button className="submit" type="submit"> Login </button>
          </form>
      </div>   
    </>
  );
}
 
export default loginForm;