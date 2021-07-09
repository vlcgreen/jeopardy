import {combineReducers} from 'redux';
import categoryReducer from './categoryReducer'

let rootReducer = combineReducers({
    
    categories: categoryReducer
});

export default rootReducer