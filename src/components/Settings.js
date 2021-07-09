import React, { useState, useEffect } from 'react';
import Multiselect from 'multiselect-react-dropdown';
import {useSelector, useDispatch} from 'react-redux';
import {setCategory} from '../actions/categoryActions';



const Settings = () => {
    const options = useSelector(state => state.categories.question_category);

    const [categories, setCategories] = useState("")

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


    console.log(options)


    return (
    <>
        {/* <div>
          <h2>Select Category:</h2>
          <select value={categories} onChange={(e)=>setCategories(e.target.value)}>
            {options?.map((eachCat) => (
                <option value={eachCat.id} key={eachCat.id} >
                  {eachCat.title}
                </option>
              ))}
          </select>
        </div> */}
    </>
    )
}

export default Settings
