
import { useState,useContext } from 'react';
import './App.css';
import Menu from './Components/Menu'
import Quiz from './Components/Quiz'
import EndScreen from './Components/EndScreen'
import { QuizContext } from './Helpers/Context';
function App() {
  const[gameState,setGameState]=useState("menu")
  const[score,setScore]=useState(0)
  const[userName,setUserName]=useState()
  
  return (
    <div className="App">
      
      <QuizContext.Provider value={{gameState,setGameState,score,setScore,userName,setUserName}}>
      {gameState === "menu" && <Menu/>}
      {gameState === "quiz" && <Quiz/>}
      {gameState === "endScreen" && <EndScreen/>}
      </QuizContext.Provider>
      
    </div>
  );
}

export default App;
