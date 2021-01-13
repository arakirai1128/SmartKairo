import React from 'react';
import Main from './Main';
import { Container } from '@material-ui/core';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container maxWidth="sm">
        < Main />
      </Container>
    </div>
  );
}

export default App;
