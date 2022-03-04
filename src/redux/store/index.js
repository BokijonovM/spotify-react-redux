import {  createStore, compose, applyMiddleware, combineReducers} from "redux";
import  thunk from 'redux-thunk';
import { mainReducer } from "../reducers/main";
import { SongReducer } from "../reducers/songs";
 


export const initialState = { 
    artist: {
        searchTerm: [],
        isError: false,
        isLoading: true
    },
  
}
const mainReducers = combineReducers({
    artist: mainReducer,
    // songs: SongReducer
})

const composeFinction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 export const configureStore = createStore(
    mainReducers,
    initialState,
    composeFinction(applyMiddleware(thunk))
)
