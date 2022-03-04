import { ADD_TO_FAVOURITESARTISTS, REMOVE_FROM_FAVOURITESARTISTS } from "../actions";
import { initialState } from "../store";

// let's write our reducer! :)
const favouritesArtistsReducer = (
  state = initialState.favouritesArtists,
  action
) => {
  switch (action.type) {
    case ADD_TO_FAVOURITESARTISTS:
      return {
        // let's return the new state object!
        ...state,
        // products: state.cart.products.push(action.payload)
        // SUPER WRONG, push() alters the original array, and that is forbidden in a pure function
        // push is not allowed because MUTATES cart.products
        artists: [...state.artists, action.payload],
        // THE ABOVE ONE IS ALLOWED
        // products: state.cart.products.concat(action.payload)
        // ALSO THIS ONE
      };

    case REMOVE_FROM_FAVOURITESARTISTS:
      return {
        ...state,
        // FILTER WORKS!
        //   products: state.products.filter(
        //     (book, i) => i !== action.payload
        //   ),
        // ALSO SLICE :D
        artists: [
          ...state.artists.slice(0, action.payload),
          ...state.artists.slice(action.payload + 1),
        ],
        // SPLICE DOESN'T THOUGH, IT MUTATES THE CART :(
      };

    default:
      return state;
  }
};

export default favouritesArtistsReducer;
