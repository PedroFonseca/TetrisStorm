import { lineNr, colNr, PIECE_TYPE } from '../constants';

export const generateArray = (n) => [...Array(n).keys()];
export const generateLine = () => generateArray(colNr).map(t => undefined);
export const generateLines = (n) => generateArray(n).map(t => generateLine(colNr));
export const generateBoard = () => generateLines(lineNr);

const PIECE_TYPE_KEYS = Object.keys(PIECE_TYPE);
export const getRandomPiece = () => PIECE_TYPE[PIECE_TYPE_KEYS[ PIECE_TYPE_KEYS.length * Math.random() << 0]];