export const SHOW_POSTS = 'SHOW_POSTS'
export const ON_INPUT_CHANGE = 'ON_INPUT_CHANGE'
export const SHOW_SELECTED_POST = 'SHOW_SELECTED_POST'


export const postsReducer =(state,action) => {
   switch (action.type) {
      case SHOW_POSTS:
         return{...state}
      case ON_INPUT_CHANGE:
         return{...state, value:action.value}
      case SHOW_SELECTED_POST:
         return{...state,postData:[...state.postData, action.res.data]}
   
      default:
        return {...state}
   }
}