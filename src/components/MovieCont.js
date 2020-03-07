import React from 'react';

//components
import { Movie } from './Movie';
import { LoadButton } from './LoadButton';
import { RouletteButton } from './RouletteButton';

//styles


export const MovieCont = () => {
  return (
    <div className='mainCont'>
      <div className='movieCont'>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div> {/* end movieCont */}
      <div className='mainButtonCont'>
        <LoadButton />
        <RouletteButton />
      </div> {/* end mainButtonCont */}
    </div> //end mainCont 
  )
}//end MovieCont
