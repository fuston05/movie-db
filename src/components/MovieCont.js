import React, { useState, useEffect } from 'react';
import axios from 'axios';

//redux
import { useSelector } from 'react-redux';

//components
import Movie from './Movie';
import { LoadButton } from './LoadButton';
import { RouletteButton } from './RouletteButton';

//styles
import './sass/MovieCont.scss';

const MovieCont = () => {
  const movies = useSelector(state => state.movies);

  return (
    <div className='mainCont'>
      <div className='movieCont'>
        {//loop through movies list
          movies.map(movie => {
            return (
              <Movie
                movie={movie}
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