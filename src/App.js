import logo from './logo.svg';
import './App.css';
import waves from './waves.svg';
import loginForm from './loginForms/loginForm';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUser } from './server/api';


function App() {





  return (
    <div className="App">
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap" rel="stylesheet"/>
      <script src="https://kit.fontawesome.com/ce0f4fdcb1.js" crossOrigin="anonymous"></script>
      <img src={waves}></img>
      <div className="container">
      <FontAwesomeIcon icon="fa-regular fa-code" />
        <form>
          <button className="btn-1">Register</button>
          <button className="btn-1">Log in</button>
          <div className="login" id="loginForm">

          </div>
        </form>
      </div>
      <footer>

      </footer>
    </div>
  );
  }

export default App;
