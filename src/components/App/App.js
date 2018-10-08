import React, { Component } from 'react';
import SimpleCounter from '../SimpleCounter/SimpleCounter';
import { AppContainer } from './styles';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SimpleCounter />
      </AppContainer>
    );
  }
}

export default App;
