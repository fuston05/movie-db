import React, { useState } from 'react';

//components
import { MovieCont } from './components/MovieCont';
import { Header } from './components/Header';

//styles


function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (

    <div className= 'app'>
      <Header />
      <MovieCont />
    </div>

  );
}//end App

export default App;
