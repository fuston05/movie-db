import React from 'react';
import {Link} from 'react-router-dom';

//components

//styles
import './sass/Movie.scss';

const Movie = ({ 
  movie
}) => {
  console.log('url: ', movie.posterURL);
  return (
    <div className='movieCard'>
        <div className= 'imageCont'>
      <Link to= { `moviedetails/${movie.id}` }>
          <div className= 'rating'>{movie.vote_average}</div>
          <img 
            alt= 'movie image'
            src= {movie.posterURL}
          />
        </Link>
        </div> {/* end imageCont */}
        <div className= 'mainMovieInfo'>
        <Link to= { `moviedetails/${movie.id}` }><h2>{movie.title}</h2></Link>
          <p><span className= 'infoLabel'>Release Date: </span>{movie.release_date}</p>
          <p><span className= 'infoLabel'>Language: </span>{movie.original_language}</p>
        </div>
      </div>
  )//end return
}//end Movie

export default Movie;