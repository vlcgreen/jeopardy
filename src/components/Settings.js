import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../actions/categoryActions';



const Settings = () => {
    const options = useSelector(state => state.categories.question_category);

    const dispatch = useDispatch();

    useEffect(() => {
        const apiURL = `http://jservice.io/api/categories?count=1000`

        const getData = async () => {
            let res = await fetch(apiURL)
            let response = await res.json()
            dispatch(setCategory(response))
        }
        getData()
    }, []);


    return (
    <>

    </>
    )
}

export default Settings
