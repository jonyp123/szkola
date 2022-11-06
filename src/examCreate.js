import { isLogged } from "./loginForms/loginForm";
import { useNavigate } from "react-router-dom";
import { isRegistered } from "./loginForms/registerForm"; 
import NotLogged from "./errors/notLogged";
import { FormProvider, useForm } from "react-hook-form";
import { useState } from "react";

const ExamCreate = () => {

  let navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const Logged = () => {

    let questionsList = 
    questions.length > 0 && 
    questions.map((item, id) => {
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
        var questionsNewObj = {
          id: index,
          question: dataCreate.question, 
          answer: dataCreate.answer
        };
        setQuestions([...questions, questionsNewObj]);
      

        console.log(questions);
      }

      return (
      <form onSubmit={handleSubmit(questionCreate)}>
        <label>Question</label>
        <input {...register('question')}></input>
        <label>Answer</label>
        <input {...register('answer')}></input>
        <button type="submit">submit Question</button>
        <button onClick={() => {setQuestions([])}}>reset quiz</button>
      </form>
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
        <button onClick={() => {navigate('/menu')}}>go back to menu</button>
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
