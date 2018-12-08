import React, { Component } from 'react';
import { GameContext, defaultContextValue } from './gameContext';
import { drawBoard } from '../gameEngine/drawBoard';
import { turnLeft, turnRight, moveDown, moveLeft, moveRight, drop } from '../gameEngine/gameBrain';

export default class GameProvider extends Component {
    constructor(props) {
        super(props);

        this.state = defaultContextValue;
        this._onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount(){
        document.addEventListener("keydown", this._onKeyDown, false);

        this.timer = setInterval(
            () => this.setState(prevState => moveDown(prevState)),
            1000,
        );
    }

    componentWillUnmount(){
      document.removeEventListener("keydown", this._onKeyDown, false);
      clearInterval(this.timer);
    }

    render(){
        return (
            <GameContext.Provider value={{
                    board: drawBoard(this.state.board, this.state.piece),
                    queue: this.state.queue,
                }}>
                { this.props.children }
            </GameContext.Provider>
        );
    }
    onKeyDown(key) {
        switch (key.code){
            case 'ArrowUp': this.setState(prevState => turnLeft(prevState)); break;
            case 'ArrowDown': this.setState(prevState => moveDown(prevState)); break;
            case 'ControlLeft': this.setState(prevState => turnRight(prevState)); break;
            case 'ArrowRight': this.setState(prevState => moveRight(prevState)); break;
            case 'ArrowLeft': this.setState(prevState => moveLeft(prevState)); break;
            case 'Space': this.setState(prevState => drop(prevState)); break;
            default: console.log(key.code); break;
        }
    }
}