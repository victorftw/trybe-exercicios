import React, { Component } from 'react';

class Form extends Component {
  state = {
    about: '',
  };

  textareaChange = (event) => {
    const { value } = event.target;
    this.setState({
      about: value,
    });
  };
  render() {
    return (
      <>
        <h1>Forms</h1>
        <form>
          <label>
            <select name="select">
              <option>Javascript</option>
              <option>Python</option>
            </select>
          </label>
          <label>
            Nos conte algo sobre você! :D
            <br />
            <textarea name="about" onChange={this.textareaChange}></textarea>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
