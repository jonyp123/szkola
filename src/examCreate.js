import { isLogged } from "./loginForms/loginForm";
import { useNavigate } from "react-router-dom";
import { isRegistered } from "./loginForms/registerForm"; 
import NotLogged from "./errors/notLogged";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import {db} from './firebase-config';
import './examCreate.css';

const ExamCreate = () => {

  let navigate = useNavigate();

  const createQuiz = async() => {
    const quizesCollectionRef = collection(db, "quiz")
        const data = await addDoc(quizesCollectionRef, { questions } );
    setQuestions([])   
      };

  const [questions, setQuestions] = useState([]);
  const [nextQuestionType, setNextQuestionType] = useState("ABCD");
  const Logged = () => {

    let questionsList = 
    questions.length > 0 && 
    questions.map((item, id) => {
      if(item.type === "open"){
        if(!null){
          return (
            <div>
              <h2>
                {id + 1}. question:
              </h2>
              <p>{item.question}</p>
              <h2>
                {id + 1}. answer:
              </h2>
              <p>{item.answer}</p>
              <button> delete this question (not working yet!)</button>
            </div>
          );
        }
      }else{
        return (
          <>
            <div>
              <h2>
                {id + 1}. question:
              </h2>
              <p>{item.question}</p>
              <h2>
                answers:
              </h2>
              <p>A: {item.answerA}</p>
              <p>B: {item.answerB}</p>
              <p>C: {item.answerC}</p>
              <p>D: {item.answerD}</p>
              <h2>
                correct answer:
                <br/>
                {item.correctAnswer}
              </h2>
              <button className="quizButton"> delete this question (not working yet!)</button>
            </div>
          </>
        )
      }
    }, this)

    const MyForm = () => {

      const [index, setIndex] = useState(0);
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

      function questionCreate (dataCreate) {
        const tempQuestions = [];
        setIndex(index + 1)
        let questionsNewObj; 
        if(nextQuestionType === "open answer"){
          questionsNewObj = {
            id: index,
            type: "open",
            question: dataCreate.question, 
            answer: dataCreate.openAnswer
          };
          setQuestions([...questions, questionsNewObj]);
        }else{
          questionsNewObj = {
            id: index,
            type: "choice",
            question: dataCreate.question, 
            answerA: dataCreate.answerA,
            answerB: dataCreate.answerB,
            answerC: dataCreate.answerC,
            answerD: dataCreate.answerD,
            correctAnswer: dataCreate.correctAnswer
          };
          setQuestions([...questions, questionsNewObj]);
          console.log(questions)
        }
      

        console.log(questions);
      }

      function submitWholeQuiz(dataToPost) {
        createQuiz()
      }

      function handleAnswerTypeChange(){
        if(nextQuestionType === "ABCD"){
          setNextQuestionType("open answer")
        }else {
          setNextQuestionType("ABCD")
        }
      }

      const Answer = () => {
        if(nextQuestionType === "ABCD"){
        return(
          <>
            <br></br>
            <label>First Answer</label>
            <input {...register('answerA')}></input>
            <br></br>
            <label>Second Answer</label>
            <input {...register('answerB')}></input>
            <br></br>
            <label>Third Answer</label>
            <input {...register('answerC')}></input>
            <br></br>
            <label>fourth Answer</label>
            <input {...register('answerD')}></input>
            <br></br>
            <label>which answer is correct?</label>
            <select {...register('correctAnswer')}>
              <option value={"a"}>A</option>
              <option value={"b"}>B</option>
              <option value={"c"}>C</option>
              <option value={"d"}>D</option>
            </select>
          </>
        )
        }else{
          return(
            <>
              <input {...register('openAnswer')}></input>
              <br></br>
            </>
          )
        }

      }

      return (
        <>
      <form onSubmit={handleSubmit(questionCreate)} className="quizForm"> 
        <label>Question</label>
        <input {...register('question')}></input>
        <br></br>
        <label>Answer</label>
        <Answer/>
        <button type="submit" className="quizButton">submit Question</button>
      </form>
      <div className="container">
        <button className="quizButton" onClick={() => {setQuestions([])}}>reset quiz</button>
        <button className="quizButton" onClick={() => {submitWholeQuiz()}}>Save your quiz</button>
        <button className="quizButton" onClick={() => {handleAnswerTypeChange()}}>Change question type to {nextQuestionType === "ABCD"? "open answer" : "ABCD"}</button>
        <button className="quizButton" onClick={() => {navigate('/menu')}}>go back to menu</button>
      </div>
      
      </>
      )
    }

    return (
      <div>
        <MyForm></MyForm>
        <div>{questionsList}</div>
      </div>
    )
  }

  if(isLogged){
    return (
      <>
        <Logged></Logged>
        
      </>
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
 
export default ExamCreate;
