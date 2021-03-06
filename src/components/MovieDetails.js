import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components

//styles
import './sass/MovieDetails.scss';

const MovieDetails = () => {
  const movies = useSelector(state => state.movies);
  const { id } = useParams();

  //find movie with id match form store
  const selectedMovie = movies.filter(movie => {
    return (parseInt(movie.id) === parseInt(id));
  });

  return (
    <>
      {
        selectedMovie && selectedMovie.map(movie => {
          return (
            <div key={movie.id} className='movieDetailsCont'>

              <div className='detailsImageCont'>
                {/* <img alt= 'movie image' src= {movie.posterURL} /> */}
                <img alt='movie image' src={movie.backDropURL} />
              </div>

              <div className='detailsText'>
                <h3>{`${movie.title} `}<span>{`(${(movie.release_date).slice(0, 4)})`}</span></h3>
              </div>

            </div> // end movieDetailsCont
          )
        }) //end map
      }
    </>
  )
}//end MovieDetails

export default MovieDetails;