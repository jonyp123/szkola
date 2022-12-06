import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isLogged } from "./loginForms/loginForm";
import NotLogged from "./errors/notLogged";
import './examJoin.css';
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { useForm } from "react-hook-form";

const ExamJoin = () => {
    let navigate = useNavigate();
    const usersCollectionRef = collection(db, "quiz") 
    const [quizes, setQuizes] = useState([])
    const [matchQuiz, setMatchQuiz] = useState()
    const [showCodeInput, setShowCodeInput] = useState(false)
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        setValue,
        clearErrors,
        formState: { errors },
      } = useForm({ mode: "all" });

    useEffect(() => {
        const getQuizes = async () => {
          const data = await getDocs(usersCollectionRef);
          setQuizes(data.docs); 
        };
        getQuizes();

      }, [])

      function chooseQuiz(e) {
        for(let i = 0; i <= quizes.length; i++){
            if(quizes[i]._document.data.value.mapValue.fields.QuizPostCode.stringValue === e.quizCode){
                setMatchQuiz(quizes[i])
                return 0;
            }
        }
      }

    if(sessionStorage.getItem("logged") === "true"){
        return (
            <>
                <button className="main" onClick={() => {navigate('/menu')}}>Main menu</button>
                <div className="menu">
                    <h1>Randomize quiz</h1>
                    <h1 onClick={() => {setShowCodeInput(true)}}>Join quiz</h1>
                    {showCodeInput &&
                    <form onSubmit={handleSubmit(chooseQuiz)}>
                        <label>Quiz code</label>
                        <input {...register('quizCode')}></input>
                        <button>submit</button>
                    </form> 
                    }   
                </div>
            </>
          );
    }else{
        return(
            <NotLogged></NotLogged>
        )
    }


    
}
 
export default ExamJoin;