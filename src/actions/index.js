// ************* ACTIONS INDEX ************* //
import {axiosWithAuth} from '../utils/axiosWithAuth';

// constants
export const FETCH_DATA= 'FETCH_DATA';
export const UPDATE_MOVIES= 'UPDATE_MOVIES';
export const SET_ERROR= 'SET_ERROR';

export const getData = () => dispatch => {
  dispatch({ type: FETCH_DATA });
  const randList= Math.floor( (Math.random() * 100) + (Math.random() * 100) );

  // axiosWithAuth(`/list/${randList}?page=1&`, 4)
  // axiosWithAuth(`/list/75?page=1&`, 4)

  axiosWithAuth(`/list/31?page=1&`, 4)
  .get()
  .then(res => {
    dispatch({type: UPDATE_MOVIES, payload: res.data.results});
      console.log('res data: ', res.data);
    })
    .catch(err => { 
      dispatch({ type: SET_ERROR, payload: 'Error retrieving movies:', err });
      console.log(err); 
    })

}//end getData
