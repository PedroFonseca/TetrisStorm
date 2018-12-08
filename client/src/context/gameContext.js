import React from 'react';
import { generateBoard } from '../util/helperFunctions';
import { PIECE_TYPE } from '../constants';

export const defaultContextValue = {
    board: generateBoard(),
    piece: {
        type: PIECE_TYPE.I,
        x: 4,
        y: 1,
        angle: 0,
    },
};

export const GameContext = React.createContext(defaultContextValue);
