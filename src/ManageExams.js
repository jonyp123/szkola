import NotLogged from "./errors/notLogged";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import {db} from './firebase-config';

const ManageExams = () => {
    let navigate = useNavigate();


const q = query(collection(db, "quiz").where('owner', '==', sessionStorage.getItem("nick")))
const unsub = onSnapshot(q, (querySnapshot) => {
  console.log("Data", querySnapshot.docs.map(d => doc.data()));
});

// const getQuizes = async() =>  {
//     let query = db.collection('quiz').where('owner', '==', sessionStorage.getItem("nick"));
// try {
//     const results = [];
//     let querySnapshot = await query.get();
//     querySnapshot.forEach(function(doc) {
//        results.push(doc.data());               
//     });
//     return results;
// } catch(e) {
//     console.log('Error getting user: ', e);
// }
// }














    if(sessionStorage.getItem("logged") === "true"){
        return(
            <>
            <button className="main" onClick={() => {navigate('/menu')}}>Main menu</button>
            <button className="main" onClick={() => {unsub()}}>pokaz dane</button>
            </>
        )
    }else{
        return(
            <NotLogged></NotLogged>
        )
    }
}
 
export default ManageExams;