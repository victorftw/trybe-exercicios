import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((num) => ({
      count: num.count + 1,
    }));
  };

  render() {
    return (
      <button type="text" onClick={this.handleClick}>
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
