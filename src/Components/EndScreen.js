import {React,useContext} from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'
import { Questions } from '../Helpers/QuestionBank'

function EndScreen() {
  const {setGameState,score,userName} = useContext(QuizContext)
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName} you have scored</h3>
      <h3>{score}/{Questions.length}</h3>
      <button onClick={()=>setGameState("menu")}>Restart Quiz</button>
    </div>
  )
}

export default EndScreen