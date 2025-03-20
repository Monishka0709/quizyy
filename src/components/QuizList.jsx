import React, { useState } from 'react'
// import Card from './Quiz'
import '../QuizList.css'
import { quizlist } from '../assets/quizlist'
import { Navigate } from 'react-router-dom'
import Quiz from './Quiz'
// import Quiz from './Quiz'


//  const Card = () => {console.log("hello")}

var topic = "";
 
const QuizList = () => {

 

  const QuizOptionComponent = ({name, id, image,}) => {
    const [showQuiz, setShowQuiz] = useState(false);
  
    const handleClick = () => {
  
      topic= name
      setShowQuiz(true);
      
    };
  
    if(showQuiz ) {
      return (

        
        
      <Navigate to={"/quiz"} />
    
      );
  
    
    }
  
    
    return (
  
      
      <div className={"quizmenu--item"} key={id} id={id} onClick={handleClick}>
        
      <div style={{backgroundColor:"black", color:"white", padding:" 0.3rem 1rem", borderRadius:"25px",}} >{name}</div>
  
      </div>
    )
   }

   
  const quizmenu =  quizlist.map((quiz) => {

    return (<QuizOptionComponent name={quiz.name} id={String(quiz.id)} image={quiz.image} />
  )
        
   

})
  return (

    <div className="quizlist--container">
      
    <h1 style={{color:"#fff",backgroundColor:"black", padding:"1rem 0 1rem 4rem", borderRadius:"3rem 0 0 3rem", margin:"2rem 0rem 0 2rem"}}>Select a Quiz</h1>
    <div className={"quizmenu--container"} >

     {quizmenu}

     
      
     
        
        
      
    </div>
    </div>
  )
}



export default QuizList;
export {topic};
