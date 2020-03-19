import { SET_BOOKS } from "../actions/actionType";
const initialState = {
  books:[],
  loading : true ,

  }
  
  const reducer = (state=initialState, action) => {
      switch(action.type){
          case SET_BOOKS:
              const books=action.payload;

              return {
                  ...state,
                  books,
                  loading:false,

                 
              }
          
          default:
              return state;
      }
  }
  
  export default reducer;