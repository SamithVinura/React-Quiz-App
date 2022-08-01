import { React, useContext } from "react";
import { QuizContext } from "../Helpers/Context";
import "../App.css";
import QuizLogo from "../Assests/QuizLogo.png";
function Menu() {
  const { setGameState, setUserName } = useContext(QuizContext);

  return (
    <div className="Menu">
      <img src={QuizLogo} alt="" />
      <input
        type="text"
        placeholder="Enter Your Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Enter E-mail"
        
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
