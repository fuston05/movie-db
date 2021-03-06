import React, { useEffect } from 'react';
import {Route} from 'react-router-dom';

//actions
import {getData} from './actions/';

//redux
import {useSelector, useDispatch} from 'react-redux';

//components
import MovieCont from './components/MovieCont';
import { Header } from './components/Header';
import Loader from './components/Loader/Loader';
import MovieDetails from './components/MovieDetails';

//styles
import './components/sass/index.scss';

const App= () => {
  const isLoading= useSelector(state => state.isLoading);
  const dispatch= useDispatch();

  useEffect(() => {
    //get initial movie list data on load
    dispatch(getData());
  }, []);

  return (

    <div className= 'App'>
      <Route path= '/'>
        <Header />
      </Route>

        <Route exact path= '/'>
          {isLoading ? <Loader /> : null}
          <MovieCont />
        </Route>

      <Route exact path= '/moviedetails/:id'>
        <MovieDetails />
      </Route>
    </div>

  );
}//end App

export default App;
