import React from "react";
import Home from "../home";
import {useForm, useWatch} from "react-hook-form";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import {db} from './../firebase-config';
import { useEffect } from "react";
import { useState } from "react";
import AlreadyExists from "../errors/alreadyExists";
import PasswordDoesntMatch from "../errors/passwordDoesntMatch.js";
import md5 from 'md5-hash'
import { useNavigate } from "react-router-dom";
import './register.css';
export let test2 = "";
export let isRegistered = false;

const RegisterForm = () => {
  
  const [users, setUsers] = useState([])
  const [repeatPassword, setRepeatPassword] = useState("")
  const [newUser, setNewUser] = useState("")
  const [newPass, setNewPass] = useState("")
  const [exists, setExists] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const usersCollectionRef = collection(db, "user")
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
  } = useForm({ mode: 'onSubmit'});

  useEffect(() => {
    isRegistered = false;
  }, [])

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs);
    };
    getUsers();
  }, [])

  function createUser() {
    if(exists === false && passwordMatch === true){
      const Create = async () =>{
      const data = await addDoc(usersCollectionRef, { login: newUser, password: md5(newPass)});
      isRegistered = true;
	  sessionStorage.setItem("logged", "true");
      test2 = newUser;
      navigate("/menu");
      };
      Create();
      setExists(null);
      setPasswordMatch(null)
    }
  };

  function handleUsernameChange(e) {
    setNewUser(e.target.value); 
    console.log(users)
    for(var i = 0; i < users.length; i++){
      if(e.target.value === users[i]._document.data.value.mapValue.fields.login.stringValue){
        setExists(true);
        return 0;
      }else{
        setExists(false);
      }
    }
  }
  
  function validateRepeatPassword(value){
    if (watch().password != value) {
      console.log("hasla sie nie zgadzaja")
      return "blad";
  }
  return true;
  }

  // function handlePasswordChange(e) {
  //   setNewPass(e.target.value); 
  //   if(e.target.value === repeatPassword){
  //     setPasswordMatch(true)
  //   }else{
  //     setPasswordMatch(false)
  //   }
  // }

  // function handleRepeatPasswordChange(e) {
  //   setRepeatPassword(e.target.value)
  //   if(e.target.value === newPass){
  //     setPasswordMatch(true)
  //   }else{
  //     setPasswordMatch(false)
  //   }
  // }

  return (  
    <>
        <form onSubmit={handleSubmit(createUser)}>
              <div className="txt">
                  <input type="text" required onChange={(e)=>{handleUsernameChange(e)}}/>
                  <span></span>
                  <label>Username</label>
              </div>
              {exists && <AlreadyExists></AlreadyExists>}
              <div className="txt">
                  <input type="password" id="password" {...register("password")} required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <div className="txt">
                  <input type="password" id="repeatPassword" {...register("reapeatPassword", {validate: validateRepeatPassword})} required/>
                  <span></span>
                  <label>Repeat password</label>
              </div>
              {!passwordMatch && <PasswordDoesntMatch></PasswordDoesntMatch>}
              <button className="submit" type="submit">Register</button>
          </form>
    </>
  );
}
 
export default RegisterForm;