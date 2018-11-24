import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board lines={25} columns={10} />
      </div>
    );
  }
}

export default App;
