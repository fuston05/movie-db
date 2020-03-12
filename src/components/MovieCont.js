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

  useEffect(() => {
    axiosWithAuth('/configuration?', 3)
      .get()
      .then(res => {
        console.log('configuration res data: ', res.data);
        let url= res.data.images.base_url;
        let fileSize= 'original';
        let posterBase= `${url}${fileSize}/`;
        setPosterBaseURL(posterBase);

      })
      .catch(err => {console.log('configuration err: ', err);})
  }, [])

  return (
    <div className='mainCont'>
      <div className='movieCont'>
        {//loop through movies list
          movies.map(movie => {
            return (
              <Movie
              movie= {movie}
              key={movie.id}
              poster= { `${posterBaseURL}${movie.poster_path}` }
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