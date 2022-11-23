import logo from './logo.svg';
import React from 'react';
import waves from './waves.svg';
import LoginForm from './loginForms/loginForm';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './App.css';
import RegisterForm from './loginForms/registerForm';
import {db} from './firebase-config';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { height } from './loginForms/registerForm';

const Home= () => {

  const [isLoging, setIsLoging] = useState(true)
  const [users, setUsers] = useState(true)
  const [width, setWidth] = useState()


  function changeWidth(Value){
    setWidth(Value)
  }

  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/ce0f4fdcb1.js" crossOrigin="anonymous"></script>
      <img src={waves}></img>
      <div className="container">
        <button className="btn-1" onClick={(e) => setIsLoging(false)}>Register</button>
        <button className="btn-1" onClick={(e) => setIsLoging(true)}>Log in</button>
        <div className="login" id="loginForm">
          {isLoging && <LoginForm></LoginForm>}
          {!isLoging && <RegisterForm handleClick={changeWidth}></RegisterForm>}
        </div>
      </div>
      <footer>

      </footer>
    </div>
  );
  }

export default Home;
