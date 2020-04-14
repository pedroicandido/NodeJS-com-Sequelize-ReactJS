import React from 'react';
import Routes from './routes';
import {GlobalStyle} from './styles/Global';
import Aux from './hoc/Aux';

function App() {

  return (
    <Aux>
      <GlobalStyle/>
      <Routes/>
    </Aux>
    
  );

}

export default App;
