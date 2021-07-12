import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {updateScore} from '../actions/categoryActions'



const Gameboard = () => {

  const categories = useSelector(state => state.categories.selected_categories)
  const allCategories = useSelector(state => state.categories.question_category)
  const score = useSelector(state => state.categories.score)

  const [clues, setClues] = useState([])
  const dispatch = useDispatch();

  useEffect(() => {
  const handleFetch = () => {
    categories.map( categoryID => {
      let url = `https://jservice.io/api/category?id=${categoryID}`

      fetch(url)
      .then(res => res.json())
      .then((result) => {
        console.log(result.clues)
        result.clues.splice(0,5).forEach(clue => {
          setClues(clues=>[...clues, clue])
        });
      })
    })
  }
  handleFetch()
}, []);

console.log(clues)
const titledCategories = []
categories.forEach(cat => {
  allCategories.find(each => {
    if(each.id == cat){
      titledCategories.push(each.title)
    }
  })
})

var timesClicked = 0

let handleClick = (e) =>{
  timesClicked++

  if(timesClicked > 50){
    alert(`Game over. Your score is ${score}`);
    this.props.history.push('/');
  }
  else{

    if(timesClicked%2==0){
      let userAnswer = window.prompt(`Enter answer:`, "")
        let answer = e.target.value
      if (userAnswer.toLowerCase() == answer.toLowerCase()) {
        alert("Correct");
        dispatch(updateScore(100))
      }
      else {
        alert("Sorry. Incorrect")
        
      }
    }
    else{
      e.target.classList.toggle("flipped");
      console.log(e.target.value)
    } //end of regular if statement
  } //end of game-ending check
  } //end of clickhandle




  return (
    
    <>
       <header class="top-header">
      <h1>Jeopardy Game</h1>
      <p class="score">Score <span class="score-count">{score}</span></p>
   </header>
    <div className="titleWrap">
    {titledCategories.map(each=>(<span className="titleEach">{each}</span>))}
    </div>
      <div className="wrapper"> 
         {clues.map(col => (<button className="box" id="card"  value={col.answer} onClick={handleClick}>
                      <figure className="row front">{col.value}</figure>
                      <figure className="back">{col.question}</figure>
        </button>))}
      </div>

    </>
  )
}

export default Gameboard
