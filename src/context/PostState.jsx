import axios from 'axios'
import React, { useReducer } from 'react'
import { postContext } from './postContext'
import { ON_INPUT_CHANGE, postsReducer, SHOW_ERROR, SHOW_SELECTED_POST, WRONG_SEARCH } from './postReducer'

export const PostState = ({ children }) => {
   const initilalState = {
      value: "",
      postData: [],
      postDataId: [],
      wrongSearch: false,
      errorMessage: ""
   }

   const [state, dispatch] = useReducer(postsReducer, initilalState)

   const changeInput = (value) => {

      dispatch({ type: ON_INPUT_CHANGE, value })
   }

   const inputWrongSearch = (value) => {
      dispatch({ type: WRONG_SEARCH }, value)
   }

   const fetchPost = async (value) => {
      if (value.trim() && !isNaN(value) && value > 0) {
         try {
            const res = await axios.get(`https://tmgwebtest.azurewebsites.net/api/textstrings/${value}`, {
               headers: {
                  'TMG-Api-Key': '0J/RgNC40LLQtdGC0LjQutC4IQ==',
                  'Access-Control-Allow-Headers': 'Content-Type',
                  'Access-Control-Allow-Credentials': true,
                  'Content-Type': 'application/json'
               }
            })

            if (state.postDataId.indexOf(value) === -1) {
               dispatch({ type: SHOW_SELECTED_POST, res, value })
            }
         } catch (error) {
            dispatch({ type: SHOW_ERROR, error, state })
            alert(`Упсс, что-то пошло не так: ${error.message}`)
         }
      } else (inputWrongSearch(value))
   }
   return (
      <postContext.Provider value={{ state, changeInput, fetchPost }}>
         {children}
      </postContext.Provider>
   )
}