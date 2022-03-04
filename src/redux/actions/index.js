export const ADD_TO_HOME_DISPLAY = 'ADD_TO_HOME_DISPLAY'
export const LOADING_WHILE_DISPLAY = 'LOADING_WHILE_DISPLAY'
// export const SELECT_SONG = 'SELECT_SONG'
let headers = new Headers({
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
    "X-RapidAPI-Key": "c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387",
  });

export const searchAction = (term)=>({
    type: ADD_TO_HOME_DISPLAY,
    payload: term
}) 
// export const selectSongAction = (song) => ({
//     type: SELECT_SONG,
//     payload: song
// })

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