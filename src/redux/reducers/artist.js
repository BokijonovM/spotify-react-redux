import { GET_ARTIST, GET_ARTIST_ERROR, GET_ARTIST_LOADING } from "../actions";
import { initialState } from "../store";

// let's write our reducer! :)
const artistReducer = (state = initialState.artist, action) => {
  switch (action.type) {
    case GET_ARTIST:
      return {
        ...state,
        jobsArray: action.payload,
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
