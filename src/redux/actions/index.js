export const ADD_TO_FAVOURITESARTISTS = "ADD_TO_FAVOURITESARTISTS";
export const REMOVE_FROM_FAVOURITESARTISTS = "REMOVE_FROM_FAVOURITESARTISTS";
export const GET_ARTISTSONGS = "GET_ARTISTSONGS";
export const GET_ARTIST = "GET_ARTIST";
export const GET_ARTIST_ERROR = "GET_ARTIST_ERROR";
export const GET_ARTIST_LOADING = "GET_ARTIST_LOADING";
export const GET_ALBUMS = "GET_ALBUMS";
export const GET_ALBUMS_ALBUM = "GET_ALBUMS_ALBUM";
export const GET_ALBUMS_ERROR = "GET_ALBUMS_ERROR";
export const GET_ALBUMS_LOADING = "GET_ALBUMS_LOADING";
export const ADD_TO_ALBUM_CART = "ADD_TO_ALBUM_CART";
export const REMOVE_TO_ALBUM_CART = "REMOVE_TO_ALBUM_CART";
export const ADD_TO_HOME_DISPLAY = 'ADD_TO_HOME_DISPLAY'
export const LOADING_WHILE_DISPLAY = 'LOADING_WHILE_DISPLAY'


export const addToFavouritesArtistsAction = (artistToAdd) => ({
  type: ADD_TO_FAVOURITESARTISTS,
  payload: artistToAdd,
});

export const removeFromFavouritesArtistsAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVOURITESARTISTS,
  payload: indexToRemove,
});

export const getArtistAction = (artistId) => {
  console.log("in getArtistAction");
  
  
  return async (dispatch, getState) => {
    let headers = new Headers({
      "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
      "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
    });
    const getSongs = async (artistId) => {
      let tracksResponse = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" +
          artistId +
          "/top?limit=50",
        {
          method: "GET",
          headers,
        }
      );

      if (tracksResponse.ok) {
        let tracklist = await tracksResponse.json();
        //setSongs({ songs: tracklist.data });
        dispatch({
          type: GET_ARTISTSONGS,
          payload: tracklist.data,
        });
      }
    };
    
    try {
      //let category = jobCategory ? `&category=${jobCategory}` : "";
      //let keyWord = keyWordSearch ? `&search=${keyWordSearch}` : "";
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/artist/" + artistId,
        {
          method: "GET",
          headers,
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log("Artist IN ACTION CREATOR", data);
        
        dispatch({
          type: GET_ARTIST,
          payload: data,
        });
        
        getSongs(artistId);
        


        dispatch({
          type: GET_ARTIST_LOADING,
        });
        
      } else {
        console.log("error happened fetching the jobs");
        dispatch({
          type: GET_ARTIST_ERROR,
        });
        dispatch({
          type: GET_ARTIST_LOADING,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ARTIST_ERROR,
      });
      dispatch({
        type: GET_ARTIST_LOADING,

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

let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

export const searchAction = (term)=>({
    type: ADD_TO_HOME_DISPLAY,
    payload: term
}) 


export const getDataSearch = (query) =>{
    return (dispatch) => {
  setTimeout( async()=>{
   try {
       const response = await fetch(
     "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
       query, {
           method: 'GET',
           headers
       });
       if(response.ok){
           const {data} = await response.json()
           dispatch({
               type: ADD_TO_HOME_DISPLAY,
               payload:data
           })
           dispatch({
               type: LOADING_WHILE_DISPLAY,
           })
           console.log(data)
       }else{
        dispatch({
            type: LOADING_WHILE_DISPLAY,
        })
       }
   } catch (error) {
       console.log(error)
       dispatch({
        type: LOADING_WHILE_DISPLAY,
    })
   }
  })
    }
}

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
