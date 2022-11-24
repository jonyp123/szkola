import logo from './logo.svg';
import React from 'react';
import waves from './waves.svg';
import LoginForm from './loginForms/loginForm';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import {db} from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PasswordDoesntMatch from './errors/passwordDoesntMatch';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import md5 from 'md5-hash'
import AlreadyExists from './errors/alreadyExists';

const Home= () => {

  const [isLoging, setIsLoging] = useState(true)
  const [users, setUsers] = useState(true)
  const [canLoginExist, setCanLoginExist] = useState(false)
  const [canLoginPass, setCanLoginPass] = useState(false)
  const [height, setHeight] = useState(300)

  function handleRegisterButton(){
    setIsLoging(false);
    setCanLoginExist(false)
    setCanLoginPass(false)
    setHeight(350)
  }
  function handleLoginButton(){
    setIsLoging(true);
    setCanLoginExist(false)
    setCanLoginPass(false)
    setHeight(300)
  }

  const RegisterForm = () => {
  
    const [users, setUsers] = useState([])
    const [repeatPassword, setRepeatPassword] = useState("")
    const [newUser, setNewUser] = useState("")
    const [newPass, setNewPass] = useState("")
    const usersCollectionRef = collection(db, "user")
    let navigate = useNavigate();
    const {
      register,
      handleSubmit,
      watch,
    } = useForm({ mode: 'onSubmit'});
  
    useEffect(() => {
      const getUsers = async () => {
        const data = await getDocs(usersCollectionRef);
        setUsers(data.docs);
      };
      getUsers();
    }, [])
  
    function createUser() {
      // let existInside = false;
      // let passwordRegInside = false;
      // if(watch().password != watch().repeatPassword){
      //   passwordRegInside = false
      // }else{
      //   passwordRegInside = true;
      // }
      for(var i = 0; i < users.length; i++){
        if(watch().login === users[i]._document.data.value.mapValue.fields.login.stringValue){
          setHeight(380)
          setCanLoginExist(true)
          return 0;
        }
      }
      if(watch().password != watch().repeatPassword){
        setHeight(380)
        setCanLoginPass(true)
      }
      if(canLoginExist === false && canLoginPass === false){
        const Create = async () =>{
        const data = await addDoc(usersCollectionRef, { login: watch().login, password: md5(watch().password)});
      sessionStorage.setItem("logged", "true");
      sessionStorage.setItem("nick", watch().login);
        navigate("/menu");
        };
        Create();
      }
    };

    return (  
      <>
          <form onSubmit={handleSubmit(createUser)}>
                <div className="txt">
                    <input type="text" required {...register("login")}/>
                    <span></span>
                    <label>Username</label>
                </div>
                {canLoginExist && <AlreadyExists></AlreadyExists>}
                <div className="txt">
                    <input type="password" id="password" {...register("password")} required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="txt">
                    <input type="password" id="repeatPassword" {...register("reapeatPassword")} required/>
                    <span></span>
                    <label>Repeat password</label>
                </div>
                {canLoginPass && <PasswordDoesntMatch></PasswordDoesntMatch>}
                <button className="submit" type="submit">Register</button>
            </form>
      </>
    );
  }

const LoginForm = () => {

  const [login, setLogin] = useState("")
  const [pass, setPass] = useState("")
  const usersCollectionRef = collection(db, "user")
  const [users, setUsers] = useState([])
  const {
    register,
    handleSubmit,
    watch,
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


  function loginSubmit() {
    for(var i = 0; i < users.length; i++){
      if(watch().loginLogin === users[i]._document.data.value.mapValue.fields.login.stringValue && md5(watch().loginPassword) === users[i]._document.data.value.mapValue.fields.password.stringValue){
        navigate("./../menu");
        sessionStorage.setItem("nick", watch().loginLogin)
		    sessionStorage.setItem("logged", "true");
        return;
      }else{
        console.log("doesnt exist")
      }
    }
  }

  return (  
    <>
      <div className="loginForm">
        <form onSubmit={handleSubmit(loginSubmit)}>
              <div className="txt">
                  <input type="text" {...register("loginLogin")} required/>
                  <span></span>
                  <label>Username</label>
              </div>
              <div className="txt">
                  <input type="password" {...register("loginPassword")} required/>
                  <span></span>
                  <label>Password</label>
              </div>
              <button className="submit" type="submit"> Login </button>
          </form>
      </div>   
    </>
  );
}

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/ce0f4fdcb1.js" crossOrigin="anonymous"></script>
      <img src={waves}></img>
      <div className="container" style={{height: height}}>
        <button className="btn-1" onClick={handleRegisterButton}>Register</button>
        <button className="btn-1" onClick={handleLoginButton}>Log in</button>
        <div className="login" id="loginForm">
          {isLoging && <LoginForm></LoginForm>}
          {!isLoging && <RegisterForm></RegisterForm>}
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
  }

export default Home;
