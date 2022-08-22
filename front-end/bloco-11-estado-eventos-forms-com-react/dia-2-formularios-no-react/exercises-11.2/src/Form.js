import React, { Component } from 'react';

class Form extends Component {
  state = {
    about: '',
    language: '',
    recebeEmail: false,
    suaFoto: '',
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <>
        <h1>Forms</h1>
        <form>
          <label>
            <select name="language" onChange={this.handleChange}>
              <option value="javascript">Javascript</option>
              <option value="python">Python</option>
            </select>
          </label>
          <label>
            Nos conte algo sobre você! :D
            <br />
            <textarea name="about" onChange={this.handleChange}></textarea>
          </label>
          <label>
            Deseja receber nossos emails?
            <input
              type="checkbox"
              name="recebeEmail"
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            <input type="file" name="suaFoto" onChange={this.handleChange} ></input>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
