import React, { useContext, useState } from 'react'
import { postContext } from '../../context/postContext';
import classes from './Search.module.css'

export const Search = () => {

   const {state,changeInput,fetchPost} = useContext(postContext)



   return(
      <div className={classes.search_wrapper}>
         <p>Идентификаторы строк</p>
         <input onChange={e =>changeInput(e.target.value)} value={state.value} className={classes.input_search}  type="text" />
         <button onClick={()=>{fetchPost(state.value); state.value=""}}>Подсчитать</button>
      </div>
   )
}