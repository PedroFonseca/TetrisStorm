import React from 'react';
import { GameContext } from './gameContext';

export function withGameProvider(Component) {
  return function GameComponent(props) {
    return (
      <GameContext.Consumer>
        {(contexts) => <Component {...props} {...contexts} />
        }
      </GameContext.Consumer>
    )
  }
}