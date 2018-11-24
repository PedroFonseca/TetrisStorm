import React, { Component } from 'react';
import { GameContext, defaultState } from './gameContext';

export default class GameProvider extends Component {
    constructor(props) {
        super(props);

        this.state = defaultState;
    }

    render(){
        return (
            <GameContext.Provider value={this.state}>
                { this.props.children }
            </GameContext.Provider>
        );
    }
}