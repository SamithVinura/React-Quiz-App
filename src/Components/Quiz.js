import {React,useState,useContext }from 'react'
import { Questions } from '../Helpers/QuestionBank'
import { QuizContext } from '../Helpers/Context'
import { FaDotCircle } from 'react-icons/fa';
function Quiz() {
  const {score,setScore,setGameState} = useContext(QuizContext)
  const[crrQuestion,setCurrQuestion]=useState(0)
  const[optionChosen,setoptionChosen]=useState("")
 
  
  function nextQuestion(){
    if(Questions[crrQuestion].asnwer===optionChosen){
      setScore(score+1)
    }
  
    setCurrQuestion(crrQuestion+1)
  }
  function finalQuestion(){
    if(Questions[crrQuestion].asnwer===optionChosen){
      setScore(score+1)
    }
    
    setGameState("endScreen")
  }
  return (
    <div className="Quiz">
        <h1>{`${crrQuestion+1}. `} {Questions[crrQuestion].prompt}</h1>

        <div >
          <button className='button1' onClick={()=>setoptionChosen("A")}>{Questions[crrQuestion].optionA}</button>
          <button className='button1' onClick={()=>setoptionChosen("B")}>{Questions[crrQuestion].optionB}</button>
          <button className='button1' onClick={()=>setoptionChosen("C")}>{Questions[crrQuestion].optionC}</button>
          <button className='button1' onClick={()=>setoptionChosen("D")}>{Questions[crrQuestion].optionD}</button>
        </div>
        <div className='ss aa'>hello</div>
        {crrQuestion=== Questions.length-1 ? <button className='button2' onClick={finalQuestion}>Finish Quiz</button> : <button className='button2' onClick={nextQuestion}>Next Question</button>}
        
    </div>
  )
}

export default Quiz