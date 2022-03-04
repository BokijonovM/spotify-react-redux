import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//import mainReducer from "../reducers";
import thunk from "redux-thunk";
import favouritesArtistsReducer from "../reducers/favouritesArtists";
import artistReducer from "../reducers/artist";

const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  favouritesArtists: {
    artists: [],
  },
  artist: {
    setArtist: {},
    songs: [],
    isError: false,
    isLoading: true,
  },
};

const bigReducer = combineReducers({
  favouritesArtists: favouritesArtistsReducer,

  artist: artistReducer,
});

export const configureStore = createStore(
  
  bigReducer,
  initialState,
  
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
