import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//import mainReducer from "../reducers";
import thunk from "redux-thunk";
import favouritesArtistsReducer from "../reducers/favouritesArtists";
import artistReducer from "../reducers/artist";
import { mainReducer } from "../reducers/main";
import { SongReducer } from "../reducers/songs";


const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favouritesArtists: {
    artists: [],
  },
  artistPage: {
    setArtist: {},
    songs: [],
    isError: false,
    isLoading: true,
    
  },
  artist: {
    isError: false,
    isLoading: true,
    searchTerm: [],
  },
};

const bigReducer = combineReducers({
  favouritesArtists: favouritesArtistsReducer,
  artist: mainReducer,
  artistPage: artistReducer,
});

export const configureStore = createStore(
  
  bigReducer,
  initialState,
  
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);




 






