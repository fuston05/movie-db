//import actions

import {
  FETCH_DATA,
  UPDATE_MOVIES,
  SET_ERROR
} from '../actions/';

//initial state
const initialState= {
  movies: [],
  isLoading: false,
  error: ''
};

//reducer
export const movieReducer= (state= initialState, action) => {
  switch( action.type ){
    case FETCH_DATA:
      console.log('fetching data');
      return{
        ...state,
        isLoading: true,
        movies: []
      }

      case UPDATE_MOVIES: 
      console.log('updating movies');
        return{
          ...state,
          movies: action.payload,
          isLoading: false
        }

      case SET_ERROR: 
      console.log('setting errors');
      return{
        ...state,
        error: action.payload
      }

    default: 
      return state;
  }//end switch

}//end reducer