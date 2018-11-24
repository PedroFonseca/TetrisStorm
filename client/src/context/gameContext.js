import React from 'react';
import { generateArray } from '../util/helperFunctions';
import { COLORS, PIECE_TYPE } from '../constants';

const lineNr = 20;
const colNr = 10;
export const defaultContextValue = {
    board: generateArray(lineNr).map(t => generateArray(colNr).map(q => COLORS.BACKGROUND)),
    piece: {
        type: PIECE_TYPE.Z,
        x: 4,
        y: 2,
        angle: 270,
    } 
};

export const GameContext = React.createContext(defaultContextValue);
