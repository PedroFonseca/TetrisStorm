import React, { Component } from 'react';
import GameProvider from './context/GameProvider'; 
import Board from './components/Board';
import Queue from './components/Queue';
import Pocket from './components/Pocket';
import './App.css';

class App extends Component {
  render() {
    return (
      <GameProvider>
        <div className="App">
          <Pocket />
          <Board />
          <Queue />
        </div>
      </GameProvider>
    );
  }
}

export default App;
