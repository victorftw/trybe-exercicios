import React, { Component } from 'react';
import './App.css';
import User from './User';

const MAX_AGE = 50

class App extends Component {
  state = {
    loading: true,
    data: [],
  };

  async componentDidMount() {
    const response = await fetch('https://api.randomuser.me/');
    const { results } = await response.json();
    this.setState({
      loading: false,
      data: results[0],
    })
  }

  shouldComponentUpdate(_nextProps, nextState) {
    console.log(nextState.data.dob.age)
    if (nextState.data.dob.age < MAX_AGE) return true;
    return false;
  }

  render() {
    const { loading, data: { name, dob, email, picture } } = this.state;
    return <div>
      {
        loading ? <p>Carregando...</p> : <User name={name.first} age={dob.age} email={email} picture={picture.large} />
      }
    </div>;
  }
}

export default App;
