import axios from "axios";

export const FETCHING_QUOTE_START = "FETCHING_QUOTE_START";
export const FETCHING_QUOTE_SUCCESS = "FETCHING_QUOTE_SUCCESS";
export const FETCHING_QUOTE_FAILURE = "FETCHING_QUOTE_FAILURE";
export const DELETE_SMURF = "DELETE_SMURF";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const UPDATE_REQUEST = "UPDATE_REQUEST";




export const getQuote = () => dispatch => {
  dispatch({ type: FETCHING_QUOTE_START });
  axios
    .get(`http://localhost:3333/smurfs`)
    .then(res => { 
        console.log("Received data from API: ", res.data);
      dispatch({ type: FETCHING_QUOTE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCHING_QUOTE_FAILURE, payload: err.response });
    });
};


  export const deleteSmurf = (ID) => dispatch => {
    dispatch({ type: DELETE_SMURF });
    axios.delete(`http://localhost:3333/smurfs/${ID}`)
        .then(res => dispatch({ type: DELETE_SMURF_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: DELETE_SMURF_FAILURE, payload: err }))
}