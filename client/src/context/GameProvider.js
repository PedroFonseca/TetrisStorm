import React, { Component } from 'react';
import { GameContext, defaultContextValue } from './gameContext';
import { drawBoard } from '../gameEngine/drawBoard';

export default class GameProvider extends Component {
    constructor(props) {
        super(props);

        this.state = defaultContextValue;
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
}