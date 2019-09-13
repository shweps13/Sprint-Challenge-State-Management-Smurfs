import {
    FETCHING_QUOTE_START,
    FETCHING_QUOTE_SUCCESS,
    DELETE_SMURF
  } from "../actions/index";  

  const initialState = {
    somethingImportant: "",
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
            quote: state.quote.filter(item => item.id !== action.payload.id)
        };
    default:
        return state;
    }
  };
  