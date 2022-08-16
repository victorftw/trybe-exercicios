import React, { Component } from "react";
import './App.css'

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'já aprendi'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'estou aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'aprenderei'
      },
    ];
    return (
      <ul> {conteudos.map(({conteudo, bloco, status: estado }) => (<li>
        <p className="card">{`Eu ${estado} o conteúdo ${conteudo} no bloco ${bloco}`}</p>
      </li>))}
      </ul>
    )
}}

export default Content;
