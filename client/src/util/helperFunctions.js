import { lineNr, colNr } from '../constants';
export const generateArray = (n) => [...Array(n).keys()];
export const generateLine = () => generateArray(colNr).map(t => undefined);
export const generateLines = (n) => generateArray(n).map(t => generateLine(colNr));
export const generateBoard = () => generateLines(lineNr);
