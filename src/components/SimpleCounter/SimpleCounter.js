import React, { Component } from 'react';
import { SimpleCounterContainer } from './styles';

class SimpleCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  handleClick = () => {
    this.setState(prevState => ({ counter: (prevState.counter += 1) }));
  };

  render() {
    const { counter } = this.state;
    return (
      <SimpleCounterContainer>
        <div className="counter">{counter}</div>
        <button onClick={this.handleClick}>Click Me</button>
      </SimpleCounterContainer>
    );
  }
}

export default SimpleCounter;
