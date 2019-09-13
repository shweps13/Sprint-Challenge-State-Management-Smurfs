import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS,
    DELETE_SMURF,
    UPDATE_REQUEST,
    DELETE_SMURF_SUCCESS
  } from "../actions/index";  

  const initialState = {
    quote: [],
    isFetching: false,
    error: ""
  };
  

  export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_QUOTE_START:
            return {
              ...state,
              isFetching: true,
              error: ""
            };
        case FETCHING_QUOTE_SUCCESS:
            return {
              ...state,
              isFetching: false,
              quote: action.payload
            };
        case DELETE_SMURF:
            return {
                ...state,
                error: ""
            };
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                isFetching: false,
                quote: action.payload
            };
    default:
        return state;
    }
  };
  