import React, { useEffect, useState } from 'react';
import NotLogged from "./errors/notLogged";
import './styleExam.css'
import { useForm } from "react-hook-form";


const Exam = (quiz) => {
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
            A<input type="checkbox" onChange={(e) => {}}></input>
            <br></br>
            B<input type="checkbox"></input>
            <br></br>
            C<input type="checkbox"></input>
            <br></br>
            D<input type="checkbox"></input>
            <br></br>
            </div>
          )
        }

      })
  
        return(
        <div className='questionsExam'>
          {smth}
        </div>
        );
}
 
export default Exam;