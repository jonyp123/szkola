import { isLogged } from "./loginForms/loginForm";
import { useNavigate } from "react-router-dom";
import NotLogged from "./errors/notLogged";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import {db} from './firebase-config';
import './examCreate.css';
const ExamCreate = () => {

  let navigate = useNavigate();

  const createQuiz = async() => {
    let quizCode;
    if(questions.length > 0){
      for(let i = 0; i <= 12; i= i + 2){
        quizCode = quizCode + Date.now().toString().charAt(i)
      }
      const quizesCollectionRef = collection(db, "quiz")
          const data = await addDoc(quizesCollectionRef, { questions, QuizPostCode: quizCode } );
      setQuestions([])
    }

      };

  const [questions, setQuestions] = useState([]);
  const [nextQuestionType, setNextQuestionType] = useState("ABCD");
  const Logged = () => {

    function deleteQuestion(questionIndex) {
      console.log('idx: ', questionIndex)
      setQuestions(questions.splice(questionIndex, 1))
      console.log('idx: ', questionIndex)
      console.log(questions)
      console.log(Date.now().toString().charAt(11))
    }

    useEffect(() => {

    },[questions])

    let questionsList =
    questions.length > 0 &&
    questions.map((item, id) => {
      if(item.type === "open" && item != null){
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
              <button className="quizButton" onClick={()=>{deleteQuestion(id)}}> delete this question (not working yet!)</button>
              </div>
          );
        }
      }else if(item.type === "choice" && item != null){
        return (
          <>
            <tr key={id}>
             <td>
              <h2>
                {id + 1}. Question
              </h2>
              <p>{item.question}</p>
              <h2>
                Answers
              </h2>
              <p>A: {item.answerA}</p>
              <p>B: {item.answerB}</p>
              <p>C: {item.answerC}</p>
              <p>D: {item.answerD}</p>
              <h2>
                Correct answer:
                <br/>
                {item.correctAnswer}
              </h2>
              <button className="quizButton" onClick={()=>{deleteQuestion(id)}}> delete this question (not working yet!)</button>
              </td>
            </tr>
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
          <div className="quiz-container">
          <form>
            <label >Answer A</label>
            <input {...register('answerA')}></input>
           
            <label >Answer B</label>
            <input {...register('answerB')}></input>
            
            <label >Answer C</label>
            <input {...register('answerC')}></input>
           
            <label >Answer D</label>
            <input {...register('answerD')}></input>
           <p >Which answer is correct?</p>
            <select {...register('correctAnswer')}>
              <option value={"a"}>A</option>
              <option value={"b"}>B</option>
              <option value={"c"}>C</option>
              <option value={"d"}>D</option>
            </select>
            </form>
          </div>
          </>
        )
        }else{
          return(
            <>
              <label >Answer</label>
              <input  className="quizInput" {...register('openAnswer')}></input>
              <br></br>
            </>
          )
        }

      }

      return (
        <>
        <div className="quiz-container">
      <form onSubmit={handleSubmit(questionCreate)} className="quizForm">
        <label className="question">Question</label>
        <input className="quizInput" {...register('question')}></input>
        <br></br>

        <Answer/>
        </form>
        <button type="submit" className="anotherButton">Add another</button>

        <button className="quizButton" onClick={() => {setQuestions([])}}>Reset</button>
        <button className="quizButton" onClick={() => {submitWholeQuiz()}}>Save your quiz</button>
        <button className="quizButton" onClick={() => {handleAnswerTypeChange()}}> {nextQuestionType === "ABCD"? "Open questions" : "Closed questions"}</button>
        <button className="quizButton" onClick={() => {navigate('/menu')}}>Main menu</button>
        <div>{questionsList}</div>
       
      </div>
     
      </>
      )
    }

    return (
      <div>
        <MyForm></MyForm>
        
      </div>
    )
  }

  if(sessionStorage.getItem("logged") === "true"){
    return (
      <>
        <Logged></Logged>
      </>
      );
  }else{
    return (
      <NotLogged></NotLogged>
    )
  }
}

export default ExamCreate;
