import React, { Component } from 'react';

class User extends Component {
  render() {
    const { name, age, email, picture } = this.props;
    return (
      <>
        <img src={picture} alt="profile img" />
        <h4>{name}</h4>
        <p>{`${age} years old`}</p>
        <p>{email}</p>
      </>
    );
  }
}

export default User;
