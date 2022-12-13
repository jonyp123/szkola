import NotLogged from "./errors/notLogged";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import {db} from './firebase-config';
import { useEffect, useState } from "react";

const ManageExams = () => {
    let navigate = useNavigate();
    let path = "_document.data.value.mapValue.fields"
    const usersCollectionRef = collection(db, "quiz")
    const [thang, setThang] = useState()
    const [quizes, setQuizes] = useState([])
    const [quizesTable, setQuizesTable] = useState([])

    useEffect(() => {
        const getQuizes = async () => {
          const data = await getDocs(usersCollectionRef);
          setQuizes(data.docs); 
        };
        getQuizes();
      }, [])

      function showResults(quizCode){
        setThang(quizCode)
      }

      const QuizList = 
        quizes.length > 0 &&
        quizes.map((item, i) =>{
            if(quizes[i]._document.data.value.mapValue.fields.owner.stringValue === sessionStorage.getItem("nick")){
                return (
                    <div key={i} style={{marginTop: 20}}>
                        {quizes[i]._document.data.value.mapValue.fields.quizTitle.stringValue}
                        <br></br>
                        {quizes[i]._document.data.value.mapValue.fields.QuizPostCode.stringValue}
                        <br></br>
                        <button onClick={(e) => {showResults(quizes[i]._document.data.value.mapValue.fields.QuizPostCode.stringValue)}}>Show/Unshow results</button>
                        <br></br>
                        <br></br>
                    </div>
            )

        }})

        const Results = () => {
            const usersCollectionRef = collection(db , "result")
            const [results, setResults] = useState([])
          
            useEffect (() => {
              const getQuizes = async () => {
                let tempResults =[]
                const data = await getDocs(usersCollectionRef);
                setResults(data.docs)
              };
              getQuizes();
            }, [])
            let resultsComponent =
            results.map((item, i) => {
              if(item._document.data.value.mapValue.fields.code.stringValue === thang){
                console.log(item._document.data.value.mapValue.fields.points.integerValue)
                return(
                  <>
                    {item._document.data.value.mapValue.fields.player.stringValue}
                    <br></br>
                    {item._document.data.value.mapValue.fields.points.integerValue}
                    <br></br>
                  </>
                )
              }
          
            })
            return(
              <>
                {resultsComponent}
                <br></br>
              </>
            )
          }

    if(sessionStorage.getItem("logged") === "true"){
        return(
            <div className="parentManage">
            <div className="ManageQuizList">
                <button className="main" onClick={() => {navigate('/menu')}}>Main menu</button>
            {QuizList}
            </div>
            <div className="ManageQuizResults">
            <Results/>
            </div>
            </div>
        )
    }else{
        return(
            <NotLogged></NotLogged>
        )
    }
}
 
export default ManageExams;