import React from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "./loginForms/loginForm";
import { isRegistered } from "./loginForms/registerForm";
import NotLogged from "./errors/notLogged";
import './examJoin.css';

const ExamJoin = () => {
    let navigate = useNavigate();
    return (
        <>
            <button className="main" onClick={() => {navigate('/menu')}}>Main menu</button>


        <div className="menu">
            <h1>Randomize quiz</h1>
            <h1>Join quiz</h1>
        </div>
        </>


      );

    
}
 
export default ExamJoin;