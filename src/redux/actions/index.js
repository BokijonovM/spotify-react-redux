export const ADD_TO_HOME_DISPLAY = 'ADD_TO_HOME_DISPLAY'

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
           console.log(data)
       }
   } catch (error) {
       console.log(error)
   }
  })
    }
}