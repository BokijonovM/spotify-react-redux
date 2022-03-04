import {  createStore, compose, applyMiddleware, combineReducers} from "redux";
import  thunk from 'redux-thunk';
import { mainReducer } from "../reducers/main";
 


export const initialState = { 
    artist: {
        searchTerm: []
    }
}
const mainReducers = combineReducers({
    artist: mainReducer
})

const composeFinction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

 export const configureStore = createStore(
    mainReducers,
    initialState,
    composeFinction(applyMiddleware(thunk))
)
