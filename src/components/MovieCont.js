import React, {useEffect} from 'react';
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

  useEffect(() => {
    // axiosWithAuth('/configuration?')
    //   .get()
    //   .then(res => {
    //     console.log('configuration: ', res);
    //   })
    //   .catch(err => {console.log('configuration err: ', err);})
  }, [])

  return (
    <div className='mainCont'>
      <div className='movieCont'>
        {//loop through movies list
          props.movies.map(movie => {
            return (
              <Movie 
                key={movie.id}
                // poster= {`https://api.themoviedb.org/4${movie.poster_path}?api_key=${CREATION}`}//URL
                title={movie.title}
                vote_count={movie.vote_count}
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