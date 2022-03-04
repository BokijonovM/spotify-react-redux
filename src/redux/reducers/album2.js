import { initialState } from "../store";
import { ADD_TO_ALBUM_CART, REMOVE_TO_ALBUM_CART } from "../actions";

const cartReducerAlbum = (state = initialState.album, action) => {
  switch (action.type) {
    case ADD_TO_ALBUM_CART:
      return {
        ...state,
        albums: [...state.albums, action.payload],
      };

    case REMOVE_TO_ALBUM_CART:
      return {
        ...state,
        albums: [
          ...state.albums.slice(0, action.payload),
          ...state.albums.slice(action.payload + 1),
        ],
      };
    default:
      return state;
  }
};

export default cartReducerAlbum;
