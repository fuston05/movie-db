import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {CREATION} from '../res/common';

//redux
import { useSelector } from 'react-redux';

//utils
import {axiosWithAuth} from '../utils/axiosWithAuth';

//components
import Movie from './Movie';
import { LoadButton } from './LoadButton';
import { RouletteButton } from './RouletteButton';

//styles
import './sass/MovieCont.scss';

const MovieCont = () => {
  const [posterBaseURL, setPosterBaseURL]= useState('');
  const movies= useSelector(state => state.movies);

  // formats the poster url onto the movie object per api docs
  const addImageURLS= () => {
    let newArr= movies.map( movie => {
      return movie.poster= `${posterBaseURL}${movie.poster_path}`;
    });
    return{
      ...movies, newArr
    }
  }//end addImageURLS

  useEffect(() => {
    axiosWithAuth('/configuration?', 3)
      .get()
      .then(res => {
        //build the base url to get images per api docs
        console.log('configuration res data: ', res.data);
        let url= res.data.images.base_url;
        let fileSize= 'original';
        let posterBase= `${url}${fileSize}/`;
        setPosterBaseURL(posterBase);
        addImageURLS();
      })
      .catch(err => {console.log('configuration err: ', err);})
  }, [])


  return (
    <div className='mainCont'>
      <div className='movieCont'>
        {console.log('movies: ', movies)}
        {//loop through movies list
          movies.map(movie => {
            movie.posterURL= `${posterBaseURL}${movie.poster_path}`;
            return (
              <Movie
              movie= {movie}
              key={movie.id}
              />) 
            })//end map
          }
      </div> {/* end movieCont */}

      <div className='mainButtonCont'>
        <LoadButton />
        <RouletteButton />
      </div> {/* end mainButtonCont */}
    </div> //end mainCont 
  )
}//end MovieCont

export default MovieCont;