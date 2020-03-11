import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';

//actions
import {getData} from './actions/';

//redux
import {connect} from 'react-redux';

//components
import MovieCont from './components/MovieCont';
import { Header } from './components/Header';
import Loader from './components/Loader/Loader';
import MovieDetails from './components/MovieDetails';

//styles
import './components/sass/index.scss';

const App= props => {

  useEffect(() => {
    //get initial movie list data on load
    props.getData();
  }, []);

  return (

    <div className= 'App'>
      <Route path= '/'>
        <Header />
      </Route>

        <Route exact path= '/'>
          {props.isLoading ? <Loader /> : null}
          <MovieCont />
        </Route>

      <Route exact path= '/moviedetails/:id'>
        <MovieDetails />
      </Route>
    </div>

  );
}//end App

  const mapStateToProps= state => {
    return{
      isLoading: state.isLoading
    }
  }//end mapStateToProps

export default connect(
  mapStateToProps,
  {getData},
  )(App);
