import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
  };

  getButtonColor = (num) => (num % 2 === 0 ? 'green' : 'white');

  handleClick = () => {
    this.setState(
      ({ count }) => ({
        count: count + 1,
      }),
      () => console.log(this.getButtonColor(this.state.count))
    );
  };

  render() {
    return (
      <button
        type="text"
        onClick={this.handleClick}
        style={{ backgroundColor: this.getButtonColor(this.state.count) }}
      >
        {this.state.count}
      </button>
    );
  }
}

export default Counter;
