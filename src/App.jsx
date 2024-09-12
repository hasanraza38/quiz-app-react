import axios from "axios"
import { useEffect, useState } from "react"

function App() {
const [questions,setQuestions]=useState([])

      useEffect(()=>{
        async function getData() {
         await axios('https://the-trivia-api.com/v2/questions')
          .then((res)=>{
            console.log(res.data);
            setQuestions(res.data)
          })
          .catch((err)=>{
            console.log(err);
          })
         }

         getData()
      },[])

  
  //shuffle array

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }
    
    return array;
  }


  return (
    <>
    <h1>Quiz App</h1>
       {question.length > 0 ? <div>
          <h1>{questions.question.text}</h1>
       </div> : <h1>Loading</h1>}













    {/* {data ? data.map((items,index) => {
      return(
        <>
      <h1>{index},{items.question.text}</h1>
       
         {shuffleArray(items.incorrectAnswers,).map((options)=>{
          return(
            <>
            <ol>

              <li>{options}</li>
            </ol>
            </>
          )
         }) }

        <hr />
        </>
      )
    }): <h1>loading..</h1>} */}



    </>
  )
}

export default App
