import {React,useContext, useState} from 'react'
import { QuizContext } from '../Helpers/Context'
import '../App.css'
import { Questions } from '../Helpers/QuestionBank'
import Confetti from 'react-confetti'

function EndScreen() {
  const {setGameState,score,userName} = useContext(QuizContext)
  
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>{userName} you have scored</h3>
      <h3>{score}/{Questions.length}</h3>
      {score <7 ? <h3 style={{color: "red"}}>Your score is below 7. please try again !</h3> : 
      <h3 style={{color: "#5cf448"}}>Congratulations You have passed the test !</h3>
      }
      <button onClick={()=>setGameState("menu")}>Restart Quiz</button>
      {score>=7 &&<Confetti
     
    />}
    </div>
  )
}

export default EndScreen