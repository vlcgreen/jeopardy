import React, { Component } from 'react';
import { connect } from 'react-redux';
import {render} from 'react-dom';
import {updateSelectedCategories} from '../actions/categoryActions'

class Categories extends Component {
    constructor(){
        super();
        this.state = {
          selCategories: []
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
      }
          
      handleSubmit(event) {
        console.log(this.state);
        console.log(this.state.selCategories)
        event.preventDefault();
        this.props.update_selected(this.state.selCategories)
      }





  render() {
    return (
      <>
                <h1>TESTING DROPDOWN FOR SELECTING CATEGORIES</h1>
        <form onSubmit={this.handleSubmit}>
            
          <strong>Select Category:</strong>
          <select multiple onChange={this.handleChange.bind(this)}>
           {
            this.props.question_category.map(item => (
               <option value={item.id}>{item.title}</option>
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
      question_category: state.categories.question_category
  }
}
// useDispatch => mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    update_selected: (data)=> dispatch(updateSelectedCategories(data))
  }
}
console.log(connect)
export default connect(mapStateToProps, mapDispatchToProps)(Categories);