import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import {test, isLogged} from "./loginForms/loginForm"
import { useNavigate } from "react-router-dom";
import App from './App';
import { isRegistered, test2 } from './loginForms/registerForm';
import NotLogged from './errors/notLogged';
const Menu = () => {

  let navigate = useNavigate();


  const Logged = () => {
    return (
      <div>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/>

  <div className="hello">
<p className="anim">Hello, {isLogged? test : test2}</p></div>
<div className="grid-container">

    <div className="grid-item1" onClick={()=>{
      navigate("/ExamCreate");
      }  
      }>
      <FontAwesomeIcon icon={faFileLines} />
    <p>
      Create a new exam
    </p>
  </div>
    <div className="grid-item2">
    <FontAwesomeIcon icon={faFolderOpen} />
      <p>
      Check your exams
    </p>
    
  </div>
    <div className="grid-item3" onClick=
      {
    () =>{
      navigate("/ExamJoin");
    }
      }       >
    <FontAwesomeIcon icon={faUsers} />
      <p>
      Join an exam
    </p>
    </div>
    <div className="grid-item4"  onClick={()=>{
      navigate("/");
	  sessionStorage.setItem("logged", "false")
      }  
      }>
      <FontAwesomeIcon icon={faArrowRight} />
      <p>Log Out</p>
      </div>
 



</div>

</div>
    )
  }
  if(sessionStorage.getItem("logged") === "true"){
    return (
      <Logged></Logged>
      );
  }else if (isRegistered){
    return (
      <Logged></Logged>
      );
  }else{
    return (
      <NotLogged></NotLogged>
    )
  }
}
 
export default Menu;
