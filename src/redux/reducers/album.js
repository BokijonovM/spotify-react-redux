import {
  GET_ALBUMS,
  GET_ALBUMS_ERROR,
  GET_ALBUMS_LOADING,
  GET_ALBUMS_ALBUM,
} from "../actions";
import { initialState } from "../store";

const albumReducer = (state = initialState.album, action) => {
  switch (action.type) {
    case GET_ALBUMS:
      return {
        ...state,
        stock: action.payload,
      };
    case GET_ALBUMS_ALBUM:
      return {
        ...state,
        album: action.payload,
      };
    case GET_ALBUMS_ERROR:
      return {
        ...state,
        isError: true,
      };

    case GET_ALBUMS_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default albumReducer;
