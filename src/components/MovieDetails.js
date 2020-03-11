import React from 'react';
import {useParams} from 'react-router-dom';

import {connect} from 'react-redux';

//components

//styles

const MovieDetails = (props) => {
  const {id}= useParams();
  //find movie with id match form store
  const selectedMovie= props.movies.filter(movie => {
    // console.log('id:', id);
    return (parseInt(movie.id) === parseInt(id));
  });
  return (
    <div className= 'movieDetails'>
      <p>{` Id: ${id} `}</p>
      <p>{`you selected: ${selectedMovie.title}`}</p>
      {console.log('selectedMovie:', selectedMovie)}
    </div>
  )
}//end MovieDetails

const mapStateToProps= state => {
  return{
    movies: state.movies
  }
}

export default connect(
  mapStateToProps,
  {}
)(MovieDetails);