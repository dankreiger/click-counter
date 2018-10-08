import React, { Component } from 'react';
import SimpleCounter from '../SimpleCounter/SimpleCounter';
import { AppContainer } from './styles';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <h1 style={{ color: 'white' }}>Did it work?</h1>
        <SimpleCounter />
      </AppContainer>
    );
  }
}

export default App;
