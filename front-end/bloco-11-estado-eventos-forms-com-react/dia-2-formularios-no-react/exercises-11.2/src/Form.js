import React, { Component } from 'react';
import Language from './components/Language';
import Textarea from './components/Textarea';

class Form extends Component {
  state = {
    about: '',
    language: '',
    recebeEmail: false,
    suaFoto: '',
    formularioComErros: false,
  };

  handleErrors = () => {
    this.setState({
      formularioComErros: true,
    });
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });

    value.length >= 90 ? this.handleErrors() : this.setState({formularioComErros: false})
  };

  render() {
    const { about, language, recebeEmail, suaFoto } = this.state;
    return (
      <>
        <h1>Forms</h1>
        <form>
          <Language value={language} onChange={this.handleChange} />
          <Textarea
            value={about}
            checkError={this.handleErrors}
            onChange={this.handleChange}
          />
          <label>
            Deseja receber nossos emails?
            <input
              type="checkbox"
              name="recebeEmail"
              value={recebeEmail}
              onChange={this.handleChange}
            ></input>
          </label>
          <label>
            <input
              type="file"
              name="suaFoto"
              value={suaFoto}
              onChange={this.handleChange}
            ></input>
          </label>
        </form>
      </>
    );
  }
}

export default Form;
