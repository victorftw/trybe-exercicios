import React, { Component } from 'react';

class About extends Component {
  render() {
    const nome = 'Victor Hugo';
    const descricao = 'Apaixonado por tecnologia e games';
    const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'NODE.JS'];
    const jsxSkills = skills.map((skill) => <li>{skill}</li>);
    return (
      <div>
        <h1>{nome}</h1>
        <p>{descricao}</p>
        <h2>Minhas Habilidades</h2>
        <ul>{jsxSkills}</ul>
      </div>
    );
  }
}

export default About;
