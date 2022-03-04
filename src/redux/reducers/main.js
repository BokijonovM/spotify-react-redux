import { ADD_TO_HOME_DISPLAY } from "../actions";
import { initialState } from "../store";


export  const mainReducer = ( state= initialState.artist, action)=>{

    switch(action.type){
       case ADD_TO_HOME_DISPLAY:
           return{
               ...state,
               searchTerm: action.payload
           }

        default: 
        return state
    }
}