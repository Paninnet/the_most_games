import React, { useContext } from 'react'

import classes from './Content.module.css'
const wowolsLetters = "aeiouyаоуыяеюи"

export const Content = ({ data }) => {
   if (data.length) {

      return <div className={classes.content_wrapper}>
         <div className={classes.titles}>
            <div className={classes.text_container}>
               <p className={classes.title}>Текст</p>
            </div>
            <div className={classes.quantity_container}>
               <p className={classes.title}>Количество слов</p>
               <p className={classes.title}>Количество гласных</p>
            </div>
         </div>

         {data.map(item => {
            let counter = 0
            for (let i = 0; i < item.text.length; i++) {
               for (let j = 0; j < wowolsLetters.length; j++) {
                  if (item.text[i] === wowolsLetters[j]) {
                     counter++
                  }
               }
            }

            return <div className={classes.data_item}>
               <div className={classes.text_item}>
                  {item.text}
               </div>
               <div className={classes.quantity_result}>
                  <div className={classes.quantity_result_item}>
                     {item.text.split(' ').length}
                  </div>
                  <div className={classes.quantity_result_item}>
                     {counter}
                  </div>
               </div>

            </div>
         })}


      </div>
   }
   return (
      <div className={classes.content_wrapper}>
         <div className={classes.titles}>
            <div className={classes.text_container}>
               <p className={classes.title}>Текст</p>
            </div>
            <div className={classes.quantity_container}>
               <p className={classes.title}>Количество слов</p>
               <p className={classes.title}>Количество гласных</p>
            </div>
         </div>
         <div className={classes.nodata}>Введи значение в input</div>
      </div>


   )


}


{/* <div className={classes.text_container}>
<p className={classes.title}>Текст</p>
{data.map(item => {
   return <div key={item.id} className={classes.content_item}>{item.text}</div>
})}
</div>
<div className={classes.quantity_container}>
<div className={classes.calced_quantity_container}>
   <p className={classes.title}>Количество слов</p>
   {data.map(item => {
      return <div key={item.id} className={classes.content_item}>
         {item.text.split(' ').length}
      </div>
   })}
</div>
<div className={classes.calced_quantity_container}>
   <p className={classes.title}>Количество гласных</p>
   {data.map(item => {
      let counter = 0
      for (let i = 0; i < item.text.length; i++) {
         for (let j = 0; j < wowolsLetters.length; j++) {
            if(item.text[i] ===wowolsLetters[j] ){
               counter++
            }
         }
      }
      return <div key={item.id} className={classes.content_item}>{counter}
      </div>
   })}
</div>
</div> */}