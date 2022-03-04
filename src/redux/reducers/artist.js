import {
  GET_ARTIST,
  GET_ARTIST_ERROR,
  GET_ARTIST_LOADING,
  GET_ARTISTSONGS,
} from "../actions";
import { initialState } from "../store";

// let's write our reducer! :)
const artistReducer = (state = initialState.artistPage, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        setArtist: action.payload,
      };

    case GET_ARTISTSONGS:
      return {
        ...state,
        songs: action.payload,
      };

    case GET_ARTIST_ERROR:
      return {
        ...state,
        isError: true,
      };

    case GET_ARTIST_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};

export default artistReducer;
