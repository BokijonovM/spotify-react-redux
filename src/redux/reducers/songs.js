   
import { SELECT_SONG  } from "../actions";
import { initialState } from "../store";


export  const SongReducer = ( state= initialState.songs, action)=>{

    switch(action.type){
                case SELECT_SONG: {
                    return {
                        ...state,
                        selectedSongs: action.payload
                    }
                }

        default: 
        return state
    }
}