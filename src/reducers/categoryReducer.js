import {SET_CATEGORY, UPDATE_SELECTED, UPDATE_SCORE} from '../actions/types'

const reducer = (state, action) => {

    if(state == null){
        state = {
            question_category: [],
            selected_categories: [],
            score: 0
        }
    }

    switch(action.type){

        case SET_CATEGORY:
            return {
            ...state, 
            question_category: action.data
            }

        case UPDATE_SELECTED:
            return {
            ...state, 
            selected_categories: action.data
            }
        case UPDATE_SCORE:
            return {
            ...state, 
            score: state.score + action.data
            }

        default:
            return state;
    }
}

export default reducer