import { createStore, combineReducers, compose, applyMiddleware } from "redux";
//import mainReducer from "../reducers";
import thunk from "redux-thunk";
import favouritesArtistsReducer from "../reducers/favouritesArtists";
import artistReducer from "../reducers/artist";
import { mainReducer } from "../reducers/main";
import { SongReducer } from "../reducers/songs";
import albumReducer from "../reducers/album";
import cartReducerAlbum from "../reducers/album2";

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
  albumCart: {
    albums: [],
  },
  album: {
    stock: [],
    album: [],
    isError: false,
    isLoading: true,
  },
  songs: {
    selectedSongs: {},
  },
};

const bigReducer = combineReducers({
  favouritesArtists: favouritesArtistsReducer,
  artist: mainReducer,
  artistPage: artistReducer,
  albumCart: cartReducerAlbum,
  album: albumReducer,
  songs: SongReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
