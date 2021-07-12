import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


const Gameboard = () => {

  const categories = useSelector(state => state.categories.selected_categories)

  const [score, setScore] = useState(0);
  const [clues, setClues] = useState([])

  useEffect(() => {
  const handleFetch = () => {
    categories.map( categoryID => {
      let url = `https://jservice.io/api/category?id=${categoryID}`
      let thisData = [{title: '', clues: []}]
      fetch(url)
      .then(res => res.json())
      .then((result) => {
        console.log(result.clues)
        result.clues.forEach(clue => {
          setClues(clues=>[...clues, clue])
        });
      })
    })
  }
  handleFetch()
}, []);

console.log(clues)

  return (
    
    <>
    <div className="titleWrap">
    {categories.map(each=>(<div className="titleEach">{each}</div>))}
    </div>
      <div className="wrapper"> 
         {clues.map(col => (<div className="box">
                      <div className="row">{col.value}</div>
        </div>))}
      </div>

{/* <div className="wrapper">
<div className="box box1">1</div>
<div className="box box1">2</div>
<div className="box box1">3</div>
<div className="box box1">4</div>
<div className="box box1">5</div>
<div className="box box1">6</div>
<div className="box box1">7</div>
<div className="box box1">8</div>
<div className="box box1">9</div>
<div className="box box1">10</div>
<div className="box box1">11</div>
<div className="box box1">12</div>
<div className="box box1">13</div>
<div className="box box1">14</div>
<div className="box box1">15</div>
<div className="box box1">16</div>
<div className="box box1">17</div>
<div className="box box1">18</div>
<div className="box box1">19</div>
<div className="box box1">20</div>
<div className="box box1">21</div>
<div className="box box1">22</div>
<div className="box box1">23</div>
<div className="box box1">24</div>
<div className="box box1">25</div>
</div> */}

    </>
  )
}

export default Gameboard
