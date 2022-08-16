import React from 'react';
import About from './About';
import { task, tasks } from './Task';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
        <About />
        <h2>MInhas tarefas</h2>
        <ul>{tasks.map((item) => task(item))}</ul>
      </div>
    );
  }
}

export default App;
