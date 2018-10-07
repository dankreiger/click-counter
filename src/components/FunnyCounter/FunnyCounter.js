import React, { Component } from 'react';
import classNames from 'classnames';
import { StyledButton } from './styles.js';

class FunnyCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  render() {
    const { count } = this.state;
    return (
      <div className="FunnyCounter">
        <StyledButton
          className={classNames('interactiveBtn ripple', {
            disabledBtn: count >= 300
          })}
          type="button"
          onClick={this.handleClick}
        >
          {/* {veryLongConditional(count)} */}
        </StyledButton>
      </div>
    );
  }
}

export default FunnyCounter;
