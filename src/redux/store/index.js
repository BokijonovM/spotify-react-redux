import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import albumReducer from "../reducers/album";
import cartReducerAlbum from "../reducers/album2";

const aComposeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initialState = {
  albumCart: {
    albums: [],
  },
  album: {
    stock: [],
    album: [],
    isError: false,
    isLoading: true,
  },
};

const bigReducer = combineReducers({
  albumCart: cartReducerAlbum,
  album: albumReducer,
});

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunctionThatAlwaysWorks(applyMiddleware(thunk))
);
