import React from 'react';
import { generateArray } from '../util/helperFunctions';
import { COLORS } from '../constants';

const lineNr = 20;
const colNr = 10;
export const defaultState = {
    board: generateArray(lineNr).map(t => generateArray(colNr).map(q => COLORS.BACKGROUND)),
};

export const GameContext = React.createContext(defaultState);
