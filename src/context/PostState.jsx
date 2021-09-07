import axios from 'axios'
import React, { useReducer } from 'react'
import { postContext } from './postContext'
import { ON_INPUT_CHANGE, postsReducer, SHOW_SELECTED_POST } from './postReducer'

export const PostState = ({ children }) => {
   const initilalState = {
      value: "",
      postData: [
         // { id: 1, text: 'qwert' },
      ],
   }

   const [state, dispatch] = useReducer(postsReducer, initilalState)

   const changeInput = (value) => {

      dispatch({ type: ON_INPUT_CHANGE, value })
   }

   const fetchPost = async (value) => {
      const res =  await axios.get(`https://tmgwebtest.azurewebsites.net/api/textstrings/${value}`, {
         headers: {
            'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Credentials': true,
            'Content-Type': 'application/json'
         }
      })
      // state.postData.push(res.data)
      // console.log(res.data);
      dispatch({ type: SHOW_SELECTED_POST, res })
   }
   return (
      <postContext.Provider value={{ state, changeInput, fetchPost }}>
         {children}
      </postContext.Provider>
   )
}