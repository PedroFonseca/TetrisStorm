import React from 'react';
import { generateBoard, generateArray, getRandomPiece } from '../util/helperFunctions';

export const defaultContextValue = {
    board: generateBoard(),
    piece: {
        type: getRandomPiece(),
        x: 4,
        y: 1,
        angle: 0,
    },
    queue: generateArray(5).map(getRandomPiece),
    pocket: undefined,
    lines: 0,
};


export const GameContext = React.createContext(defaultContextValue);
