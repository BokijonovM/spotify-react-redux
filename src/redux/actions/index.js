export const ADD_TO_FAVOURITESARTISTS = "ADD_TO_FAVOURITESARTISTS";
export const REMOVE_FROM_FAVOURITESARTISTS = "REMOVE_FROM_FAVOURITESARTISTS";
export const GET_ARTISTSONGS = "GET_ARTISTSONGS";
export const GET_ARTIST = "GET_ARTIST";
export const GET_ARTIST_ERROR = "GET_ARTIST_ERROR";
export const GET_ARTIST_LOADING = "GET_ARTIST_LOADING";

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
        let { data } = await response.json();
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
      });
    }
  };
};
