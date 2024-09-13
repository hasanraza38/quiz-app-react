  import axios from "axios"
  import { useEffect, useRef, useState } from "react"
import Modal from "./components/modal/modal"

  function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [questions,setQuestions]=useState([])
  const [questionState,setQuestionState]=useState(0)
  const checkInput=useRef([])
        useEffect(()=>{
          async function getData() {
          await axios('https://the-trivia-api.com/v2/questions')
            .then((res)=>{
              setQuestions(res.data)
              // console.log(questions);
            })
            .catch((err)=>{
              console.log(err);
            })
          }
          getData()
        },[])

function result() {
 const total = questions.length * 10
 return(
  <>



  </>
 )
}
    
    //shuffle array

    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }
      
      return array;
    }

    
                  // next botton

    function nextBtn() {
      const checkedBtn = checkInput.current.find(input => input.checked)
      if (checkedBtn) {
        const selectedValue = checkedBtn.value
        console.log('selected answer', selectedValue);
              
       if (questionState < questions.length -1) {
        setQuestionState(questionState + 1)
       } else {
        setIsModalOpen(true) 
       }

      }
      else{
        alert('please select option')        
      }
      checkInput.current.forEach(input => (input.checked = false));

  }

  const closeModal = () => {
    setIsModalOpen(false);
  };




    return (
      <div className="flex justify-center items-center h-screen">

    {questions.length > 0 ? <div>

  <div className="card mx-4 lg:card-side bg-zinc-200 text-black shadow-black shadow-2xl">
  <div className="card-body">
      <h1 className="text-center text-blue-500 text-3xl font-semibold">Quiz App</h1>
    <h2 className="card-title mt-2">Q{questionState + 1}: {questions[questionState].question.text}</h2>
    <ul className="mt-2">
    {shuffleArray([...questions[questionState].incorrectAnswers , questions[questionState].correctAnswer]).map((options , index)=>{
        return(
                <>
            <li key={index}>
            <input type="radio" className="radio checked:bg-blue-500 radio-xs" name='option' id={options} ref={el=>(checkInput.current[index] = el)} value={options} />
            <label className="text-lg font-semibold" htmlFor={options}>  {options}</label>
            </li>
                </>

                  )
                })}
    </ul>
    <div className="card-actions justify-end">
      <button className="btn bg-blue-500 text-white hover:bg-blue-600" onClick={nextBtn}>Next</button>
    </div>
  </div>
</div>
            
</div> : <span className="loading loading-spinner text-info"></span>}


{isModalOpen && (
  <div className="modal" role="dialog">
    <div className="modal-box">
      <h3 className="text-lg font-bold">Quiz Completed!</h3>
      <p className="py-4">Here are your results.</p>
      <button onClick={closeModal} className="btn">Close</button>
    </div>
    <div className="modal-backdrop" onClick={closeModal}></div>
  </div>
)}




      </div>

    )
  }

  export default App
