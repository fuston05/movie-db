// ************* ACTIONS INDEX ************* //
import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// constants
export const FETCH_DATA = 'FETCH_DATA';
export const UPDATE_MOVIES = 'UPDATE_MOVIES';
export const SET_ERROR = 'SET_ERROR';

export const getData = () => dispatch => {
  let movieData = [];
  dispatch({ type: FETCH_DATA });
  const randList = Math.floor((Math.random() * 100) + (Math.random() * 100));

  // axiosWithAuth(`/list/${randList}?page=1&`, 4)
  // axiosWithAuth(`/list/75?page=1&`, 4)

  //get movie initial movie data (1st axios call)
  axiosWithAuth(`/list/31?page=1&`, 4)
    .get()
    .then(res => {
      //send movies up to variable for now so we can change the image urls below
      movieData = res.data.results;
      console.log('res from actions')
    })

    .then(() => {

      //2nd (nested) axios call
      //get 'base' image url from config url per api docs
      axiosWithAuth('/configuration?', 3)
        .get()
        .then(configRes => {
          //build the base url to get images per api docs
          //get from configuration url
          console.log('configuration res from actions: ', configRes.data);
          let url = configRes.data.images.base_url;
          let fileSize = 'original';
          //build the 'base url' for images
          let posterBase = `${url}${fileSize}/`;

          // add image urls to movie objects
          let newArr = movieData.map(movie => {
            //build the image urls
            movie.posterURL = `${posterBase}${movie.poster_path}`;
            movie.backDropURL = `${posterBase}${movie.backdrop_path}`;
            return (
              movie
            )
          });// end map

          //send the movie data to reducer
          dispatch({ type: UPDATE_MOVIES, payload: newArr });
          console.log('newArr from actions: ', newArr);
        })
        .catch(err => { //catch for 2nd axios call
          dispatch({ type: SET_ERROR, payload: 'Error retrieving configuration data:', err });
          console.log('configuration err: ', err);
        })

    }) //end  2nd .then for 1st axios call

    // catch for 1st axios call
    .catch(err => {
      dispatch({ type: SET_ERROR, payload: 'Error retrieving movies:', err });
      console.log(err);
    })

}//end getData

