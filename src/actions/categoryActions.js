//you can put multiple action creators in this file
//because you're using export not export default


/**
 * This is not a named export. When you import into your component, 
 * you have to use the following:
 * import {increment} from ./path 
 */



import {SET_CATEGORY, UPDATE_SELECTED, UPDATE_SCORE} from './types'

export const setCategory = (optionsData) => {
    return {
        type: SET_CATEGORY,
        data: optionsData
    }
};
export const updateSelectedCategories = (selectedData) => {
    return {
        type: UPDATE_SELECTED,
        data: selectedData
    }
};
export const updateScore = (scoreData) => {
    return {
        type: UPDATE_SCORE,
        data: scoreData
    }
};