import React, {useState, useEffect} from 'react';
import axios from 'axios';

import {CREATION} from '../res/common';

//redux
import { connect } from 'react-redux';

//utils
import {axiosWithAuth} from '../utils/axiosWithAuth';

//components
import Movie from './Movie';
import { LoadButton } from './LoadButton';
import { RouletteButton } from './RouletteButton';

//styles
import './sass/MovieCont.scss';

const MovieCont = props => {
  const [posterBaseURL, setPosterBaseURL]= useState('');

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
          props.movies.map(movie => {
            return (
              <Movie
              key={movie.id}
              poster= { `${posterBaseURL}${movie.poster_path}` }
              title={movie.title}
              vote_average= {movie.vote_average}
              release_date={movie.release_date}
              original_language={movie.original_language}
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

const mapStateToProps = state => {
  return {
    movies: state.movies,
    isLoading: state.isLoading
  }
}//end mapStateToProps

export default connect(
  mapStateToProps,
  {}
)(MovieCont);