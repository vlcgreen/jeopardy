import React, { Component } from 'react';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import {updateSelectedCategories, updateScore} from '../actions/categoryActions'

class Categories extends Component {
    constructor(){
        super();
        this.state = {
          selCategories: [],
          score: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
    
        const selected=[];
        let selectedOption=(event.target.selectedOptions);
     
        for (let i = 0; i < selectedOption.length; i++){
            selected.push(selectedOption.item(i).value)
        }
      
        this.setState({selCategories: selected});
        this.setState({score: 0})
      }
          
      handleSubmit(event) {
        console.log(this.state);
        console.log(this.state.selCategories)
        event.preventDefault();
        this.props.update_selected(this.state.selCategories)
        this.props.update_score(this.state.score)
        this.props.history.push('/game');
      }





  render() {
    return (
      <>
                <h1>Let's Play a Game</h1>
        <form onSubmit={this.handleSubmit}>
            
          <strong>Select five categories:</strong><br/>
          <select multiple onChange={this.handleChange.bind(this)}>
           {
            this.props.question_category.map(item => (
               <option type="checkbox" value={item.id}>{item.title}</option>
             ))
          }
          </select>
    
          <input type="submit" value="Submit" />
        </form>
      </>
    )
  }
}

// useSelector => mapStateToProps
const mapStateToProps = state => {
  return {
      question_category: state.categories.question_category,
      score: state.categories.score
  }
}
// useDispatch => mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    update_selected: (data)=> dispatch(updateSelectedCategories(data)),
    update_score: (score)=> dispatch(updateScore(score))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
