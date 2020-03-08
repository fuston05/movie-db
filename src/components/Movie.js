import React from 'react';

//components

//styles
import './sass/Movie.scss';

const Movie = ({ 
  title, 
  poster, 
  original_language, 
  release_date, 
  vote_average 
}) => {
  return (
    <div className='movieCard'>
      <div className= 'imageCont'>
        <div className= 'rating'>{vote_average}</div>
        <img 
          alt= 'movie image'
          src= {poster}
        />
      </div> {/* end imageCont */}
      <div className= 'mainMovieInfo'>
        <h2>{title}</h2>
        <p><span className= 'infoLabel'>Release Date: </span>{release_date}</p>
        <p><span className= 'infoLabel'>Language: </span>{original_language}</p>
      </div> {/* end mainMovieInfo */}
    </div> // end movieCard
  )//end return
}//end Movie

export default Movie;