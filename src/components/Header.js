import React from 'react';
import {useHistory} from 'react-router-dom';

//components

//styles
import './sass/Header.scss';

export const Header = () => {
  // get current location
  const location= useHistory().location.pathname;

  return (
    <header className= 'header'>
      <h1>
        {// change header text based on url location
        location.includes('/moviedetails') ? 'Movie Details' : 'Movie Roulette'
        }
      </h1>
    </header>
  )
}//end Header
