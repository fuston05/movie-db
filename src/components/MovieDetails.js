import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {connect} from 'react-redux';

//components

//styles

const MovieDetails = () => {
  const movies= useSelector( state => state.movies );
  const {id}= useParams();
  console.log('movies: ',movies)

  //find movie with id match form store
  const selectedMovie= movies.filter(movie => {
    // console.log('id:', id);
    return (parseInt(movie.id) === parseInt(id));
  });

  return (
    <div className= 'movieDetails'>
      {
        selectedMovie && selectedMovie.map(movie => {
          return(
            <div key= {movie.id}>
              <p>{` Id: ${movie.id} `}</p>
              <p>{`you selected: ${movie.title}`}</p>
              {console.log('selectedMovie:', movie)}
              
            </div>

          )
        })
      }
    </div>
  )
}//end MovieDetails

export default MovieDetails;