export const SHOW_POSTS = 'SHOW_POSTS'
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE'
export const SHOW_SELECTED_POST = 'SHOW_SELECTED_POST'
export const SHOW_ERROR = 'SHOW_ERROR'
export const WRONG_SEARCH = 'WRONG_SEARCH'

debugger
export const postsReducer =(state,action) => {
   switch (action.type) {
      case SHOW_POSTS:
         return{...state}
      case ON_INPUT_CHANGE:
         return{...state, value:action.value}
      case SHOW_SELECTED_POST:
         return{...state,postData:[...state.postData, action.res.data], postDataId:[...state.postDataId, action.value], wrongSearch:false}
      case SHOW_ERROR:
         return{...state, errorMessage:[action.error.message]}
      case WRONG_SEARCH:
         return{...state,wrongSearch:true}
   
      default:
        return {...state}
   }
}