import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

const QuestionsFile = () => {
  return (
    <div>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet"/>

  <div className="hello">
<p className="anim">Hello, user_name!</p></div>
<div className="grid-container">

    <div className="grid-item1">
      <FontAwesomeIcon icon={faFileLines} />
    <p>
      Create a new exam
    </p>
  </div>
    <div className="grid-item2"><i className="fa-solid fa-folder-open fa-2x"></i>
      <div className="circle">
      <p>
      Check your exams
    </p>
    </div>
  </div>
    <div className="grid-item3"><i className="fa-solid fa-box-archive fa-2x"></i><p>
      Sialala
    </p></div>
    <div className="grid-item4"><i className="fa-solid fa-terminal fa-2x"></i><p>Log Out</p></div>
 
</div>

</div>
  );
}
 
export default QuestionsFile;
