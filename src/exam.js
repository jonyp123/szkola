import React, { useEffect, useState } from 'react';
import NotLogged from "./errors/notLogged";
import './styleExam.css'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {db} from './firebase-config';
import { addDoc, collection } from "firebase/firestore";


const Exam = (quiz) => {
    let navigate = useNavigate();
    const [quizQuestions, setQuizQuestions] = useState([])
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
    function validateQuestion(data){

    }

    useEffect(() => {
      let questQuiz = []
        quiz.quiz.questions.arrayValue.values.map((item, i) => {
          if(item.mapValue.fields.type.stringValue === "open"){
            questQuiz.push({
              question: item.mapValue.fields.question.stringValue, 
              type: item.mapValue.fields.type.stringValue,
              answer: item.mapValue.fields.answer.stringValue
            })
          }else if (item.mapValue.fields.type.stringValue === "choice"){
            questQuiz.push({
              question: item.mapValue.fields.question.stringValue, 
              type: item.mapValue.fields.type.stringValue,
              answerA: item.mapValue.fields.answerA.stringValue,
              answerB: item.mapValue.fields.answerB.stringValue,
              answerC: item.mapValue.fields.answerC.stringValue,
              answerD: item.mapValue.fields.answerD.stringValue,
              correct: item.mapValue.fields.correctAnswer.stringValue
            })
          }
        }) 
        setQuizQuestions(questQuiz)
      }, [quiz])
 
      let smth = quizQuestions.map((item, i) => {
        if(item.type == "open"){
          return (
            <>
            <div className='questionExam'>{item.question}</div>
            <br></br>
            <input {...register(`question${i}`)}></input>
            </>
          )
        }else if(item.type == "choice"){
          return(
            <div className='questionExam'>          
            {item.question}
            <br></br>
            <select {...register(`question${i}`)}>
              <option value="a">{item.answerA}</option>
              <option value="b">{item.answerB}</option>
              <option value="c">{item.answerC}</option>
              <option value="d">{item.answerD}</option>
            </select>
            </div>
          )
        }

      })
      
      let points = 0

        const submitPoints = async() => {
          console.log(quiz.quiz.QuizPostCode)
          const resultsCollectionRef = collection(db , "result")
                const data = await addDoc(resultsCollectionRef, {code: quiz.quiz.QuizPostCode.stringValue, player: sessionStorage.getItem("nick"), points: points} );
                navigate('/menu')
            };

      function submit(){
        let cos = 0
        for(var value of Object.values(watch())){
          if(value === quizQuestions[cos].answer || value === quizQuestions[cos].correct){
            points++
          }

          cos++
        }
        submitPoints()
      }
      
      function checkPoints(){
        console.log(points)
      }

        return(
        <div className='questionsExam'>
          {smth}
          <button className="main" onClick={() => {navigate('/menu')}}>Stop the quiz</button>
          <button className="main" onClick={() => {submit()}}>Submit</button>
          <button className="main" onClick={() => {checkPoints()}}>check points</button>
        </div>
        );
}
 
export default Exam;