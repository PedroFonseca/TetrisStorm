import React, { Component } from 'react';
import { GameContext, defaultContextValue } from './gameContext';
import { drawBoard } from '../gameEngine/drawBoard';
import { turnLeft, turnRight, moveDown, moveLeft, moveRight } from '../gameEngine/gameBrain';

export default class GameProvider extends Component {
    constructor(props) {
        super(props);

        this.state = defaultContextValue;
        this._onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount(){
      document.addEventListener("keydown", this._onKeyDown, false);
    }
    componentWillUnmount(){
      document.removeEventListener("keydown", this._onKeyDown, false);
    }

    render(){
        return (
            <GameContext.Provider value={{
                    board: drawBoard(this.state.board, this.state.piece), 
                }}>
                { this.props.children }
            </GameContext.Provider>
        );
    }
    onKeyDown(key) {
        switch (key.code){
            case 'ArrowUp': this.setState(turnLeft(this.state)); break;
            case 'ArrowDown': this.setState(moveDown(this.state)); break;
            case 'ControlLeft': this.setState(turnRight(this.state)); break;
            case 'ArrowRight': this.setState(moveRight(this.state)); break;
            case 'ArrowLeft': this.setState(moveLeft(this.state)); break;
            default: console.log(key.code); break;
        }
    }
}