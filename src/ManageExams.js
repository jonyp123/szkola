import NotLogged from "./errors/notLogged";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import {db} from './firebase-config';
import { useEffect, useState } from "react";

const ManageExams = () => {
    let navigate = useNavigate();
    let path = "_document.data.value.mapValue.fields"
    const usersCollectionRef = collection(db, "quiz")
    const [quizes, setQuizes] = useState([])
    const [quizesTable, setQuizesTable] = useState([])

    useEffect(() => {
        const getQuizes = async () => {
          const data = await getDocs(usersCollectionRef);
          setQuizes(data.docs); 
        };
        getQuizes();
      }, [])


      const QuizList = 
        quizes.length > 0 &&
        quizes.map((item, i) =>{
            console.log(i)
            if(quizes[i]._document.data.value.mapValue.fields.owner.stringValue === sessionStorage.getItem("nick")){
                return (
                    <div key={i} style={{marginTop: 20}}>
                        {quizes[i]._document.data.value.mapValue.fields.quizTitle.stringValue}
                        <br></br>
                        {quizes[i]._document.data.value.mapValue.fields.QuizPostCode.stringValue}
                        <br></br>
                    </div>
            )
            }else {
                return(
                    <div key={i}>
                    
                </div>
                )
            }

        })













    if(sessionStorage.getItem("logged") === "true"){
        return(
            <>
            <button className="main" onClick={() => {navigate('/menu')}}>Main menu</button>
            {QuizList}
            </>
        )
    }else{
        return(
            <NotLogged></NotLogged>
        )
    }
}
 
export default ManageExams;