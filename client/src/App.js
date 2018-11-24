import React, { Component } from 'react';
import GameProvider from './context/GameProvider'; 
import Board from './components/Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <GameProvider>
        <div className="App">
          <Board lines={25} columns={10} />
        </div>
      </GameProvider>
    );
  }
}

export default App;
