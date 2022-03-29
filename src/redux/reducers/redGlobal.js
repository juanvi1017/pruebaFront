import {
  
  ACT_message,
  
} from "../actions/actGlobal";

const initialState = {
 
  message: {
    showMessage: false,
    types: "none",
    title: "",
    time: 6000,
    onScreen: false,
  },
  
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
   
    case ACT_message:
      return Object.assign({}, state, {
        message: action.message
      })
    default:
      return state;
  }
}

export default reducer;
