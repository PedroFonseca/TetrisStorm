import React from 'react';
import { generateBoard } from '../util/helperFunctions';
import { PIECE_TYPE } from '../constants';

export const defaultContextValue = {
    board: generateBoard(),
    piece: {
        type: PIECE_TYPE.S,
        x: 4,
        y: 1,
        angle: 0,
    },
    queue: [
        PIECE_TYPE.J,
        PIECE_TYPE.L,
        PIECE_TYPE.O,
        PIECE_TYPE.S,
        PIECE_TYPE.T,
    ],
};

export const GameContext = React.createContext(defaultContextValue);
