import React from "react";
import App from "../App";
import {useForm} from "react-hook-form";
import { collection, getDocs, addDoc } from 'firebase/firestore';
import {db} from './../firebase-config';
import { useEffect } from "react";
import { useState } from "react";
import AlreadyExists from "../errors/alreadyExists";
import PasswordDoesntMatch from "../errors/passwordDoesntMatch.js";

const RegisterForm = () => {
  
  const [users, setUsers] = useState([])
  const [newUser, setNewUser] = useState("")
  const [newPass, setNewPass] = useState("")
  const [exists, setExists] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const usersCollectionRef = collection(db, "user")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


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
      const data = await addDoc(usersCollectionRef, { login: newUser, password: newPass});
      };
      Create();
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

  function handlePasswordChange(e) {
    setNewPass(e.target.value); 
  }

  function handleRepeatPasswordChange(e) {
    if(e.target.value === newPass){
      setPasswordMatch(true)
      console.log("zgadzaja sie, " + newPass)
    }else{
      setPasswordMatch(false)
      console.log("nie zgadzaja sie, " + newPass)
    }
  }

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
                  <input type="password" id="password" required onChange={(e)=>{handlePasswordChange(e)}}/>
                  <span></span>
                  <label>Password</label>
              </div>
              <div className="txt">
                  <input type="password" id="repeatPassword" required onChange={(e)=>{handleRepeatPasswordChange(e)}}/>
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