import React, { useState } from "react";
import Home from "../home";
import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form"
import md5 from 'md5-hash'
import { collection, getDocs, addDoc } from 'firebase/firestore';
import {db} from './../firebase-config';
import { useEffect } from "react";

const LoginForm = () => {

  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const usersCollectionRef = collection(db, "user")
  const [users, setUsers] = useState([])
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();


  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs);
    };
    getUsers();
  }, [])

  function handleLoginChange(e) {
    setLogin(e.target.value); 
  }

  function handleLoginPassChange(e) {
    setPass(e.target.value); 
  }


  function loginSubmit() {
    for(var i = 0; i < users.length; i++){
      if(login === users[i]._document.data.value.mapValue.fields.login.stringValue){
        navigate("./../QuestionsFile");
        return;
      }else{
        console.log("uzytkownik nie istnieje")
      }
    }
  }

  return (  
    <>
      <div className="loginForm">
        <form onSubmit={handleSubmit(loginSubmit)}>
              <div className="txt">
                  <input type="text" required onChange={(e)=>{handleLoginChange(e)}}/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div className="txt">
                  <input type="password" required onChange={(e)=>{handleLoginPassChange(e)}}/>
                  <span></span>
                  <label>Password</label>
              </div>
              <button className="submit" type="submit"> Login </button>
          </form>
      </div>   
    </>
  );
}
 
export default LoginForm;