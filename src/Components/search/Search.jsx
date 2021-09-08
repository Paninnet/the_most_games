import React, { useContext, useState } from 'react'
import { postContext } from '../../context/postContext';
import classes from './Search.module.css'

export const Search = () => {

   const {state,changeInput,fetchPost} = useContext(postContext)



   return(
      <div className={classes.search_wrapper}>
         <p className={classes.str_id}>Идентификаторы строк</p>
         <input onChange={e =>changeInput(e.target.value)} value={state.value} className={state.wrongSearch ? classes.wrong_input : classes.input_search} placeholder='Введите целое число'  type="text" />
         <button className={classes.calc_btn} onClick={()=>{fetchPost(state.value); state.value=""}}>Подсчитать</button>
      </div>
   )
}