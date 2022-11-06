import { useNavigate } from "react-router-dom";

const NotLogged = () => {

  const navigate = useNavigate();

  return ( 
    <div className='notLoggedUser'>
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/>
    <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
    />
    <div className='container-log'>
    <p className='animate_animated animate__backInDown'> Please log-in first!</p>
    <button className='log-back' onClick={() => {navigate("/")}}>Go back to login page</button>
    </div>
    </div>
   );
}
 
export default NotLogged;