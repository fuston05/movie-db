import React from 'react';

//components
import {MovieCont} from './components/MovieCont';
import {Header} from './components/Header';

//styles
import {Box, Button, Heading, Grommet} from 'grommet';
import {Notification} from 'grommet-icons';

const AppBar= (props) => (
  <Box 
    tag= 'header'
    direction= 'row'
    align= 'center'
    justify= 'between'
    background= 'brand'
    pad= {{ left: 'medium', right: 'small', vertical: 'small' }}
    elevation= 'medium'
    style= {{ zIndex: '1' }}
    {...props}
  />
)//end AppBar

const theme= {
  global: {
    colors: {
      brand: '#228bd6'
    },
    font: {
      family: 'roboto',
      size: '18px',
      height: '20px'
    }//end font
  }//end global
}//end theme

function App() {
  return (
    <Grommet theme= {theme} className="App">
      {/* <Header /> */}
      <AppBar>
        <Heading level= '3' margin= 'none' >My App</Heading>
        <Button icon= {<Notification />} onClick= {() => {}}/>
      </AppBar>
      <MovieCont />
    </Grommet>
  );
}//end App

export default App;
