import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

//redux
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {movieReducer as reducer} from './reducers/movieReducer';
//middleware
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//components
import App from './App';

//store
const store= createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
<Provider store= {store}>
  <Router>
    <App />
  </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
