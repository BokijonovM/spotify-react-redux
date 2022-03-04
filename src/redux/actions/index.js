export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUMS_ALBUM = "GET_ALBUMS_ALBUM";
export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR";
export const GET_ALBUMS_LOADING = "GET_ALBUMS_LOADING";
export const ADD_TO_ALBUM_CART = "ADD_TO_ALBUM_CART";
export const REMOVE_TO_ALBUM_CART = "REMOVE_TO_ALBUM_CART";

export const addToCartAction = (musicToAdd) => ({
  type: ADD_TO_ALBUM_CART,
  payload: musicToAdd,
});

export const removeFromCartAction = (indexToRemove) => ({
  type: REMOVE_TO_ALBUM_CART,
  payload: indexToRemove,
});

export const addToAlbumCartActionWithThunk = (musicToAdd) => {
  return async (dispatch) => {
    console.log("hello! from thunk");
    if (3 > 5) {
      dispatch({
        type: "ERROR",
      });
    } else {
      dispatch({
        type: ADD_TO_ALBUM_CART,
        payload: musicToAdd,
      });
    }
  };
};

export const getAlbumsAction = (query) => {
  console.log("in getAlbumsAction");
  return (dispatch, getState) => {
    const stateRightNow = getState();
    setTimeout(async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/album/" + query,
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
              "X-RapidAPI-Key":
                "222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          console.log("Albums IN ACTION CREATOR", data.tracks.data);
          dispatch({
            type: GET_ALBUMS,
            payload: data.tracks.data,
          });
          dispatch({
            type: GET_ALBUMS_ALBUM,
            payload: data,
          });
          dispatch({
            type: GET_ALBUMS_LOADING,
          });
        } else {
          console.log("error happened fetching the Albums");
          dispatch({
            type: GET_ALBUMS_ERROR,
          });
          dispatch({
            type: GET_ALBUMS_LOADING,
          });
        }
      } catch (error) {
        console.log(error);
        dispatch({
          type: GET_ALBUMS_ERROR,
        });
        dispatch({
          type: GET_ALBUMS_LOADING,
        });
      }
    }, 1000);
  };
};
