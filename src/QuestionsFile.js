import './menu.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

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
    <div className="grid-item2">
    <FontAwesomeIcon icon={faFolderOpen} />
      <p>
      Check your exams
    </p>
    
  </div>
    <div className="grid-item3">
    <FontAwesomeIcon icon={faUsers} />
      <p>
      Join an exam
    </p>
    </div>
    <div className="grid-item4">
      <FontAwesomeIcon icon={faArrowRight} />
      <p>Log Out</p>
      </div>
 
</div>

</div>
  );
}
 
export default QuestionsFile;
