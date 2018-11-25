import { PIECE_TYPE } from '../constants';
import { generateLines } from '../util/helperFunctions';

export const isValidPiecePosition = (board, piece) => areValidPositions(board, calculatePiecePositions(piece));

const areValidPositions = (board, positions) => {
    let linesNr = board.length;
    let colsNr = board[0].length;
    
    return positions.every(t => t.x >= 0 && t.x < colsNr && t.y > 0 && t.y < linesNr) && areAllPositionsEmpty(board, positions);
}

const areAllPositionsEmpty = (board, positions) => positions.every(pos => isEmptyCell(board, pos.x, pos.y));
const isEmptyCell = (board, x, y) => board[y][x] === undefined;
const isPositionInArray = (positions, x, y) => positions.some(pos => pos.x === x && pos.y === y);
const isLineFilled = (line) => line.filter((cell) => cell === undefined).length === 0;

export const placePieceOnBoard = (board, piece) => {
    let positions = calculatePiecePositions(piece);

    if (!areValidPositions(board, positions)){
        console.error('This should not happen!');
    }

    let newBoard = board.map((line, y) => line.map((cell, x) => isPositionInArray(positions, x, y) ? piece.type : cell ));
    return removeFullLines(newBoard);
}

const removeFullLines = (board) => {
    let linesWithoutFilled = board.filter((line) => !isLineFilled(line));
    let nrLinesRemoved = board.length - linesWithoutFilled.length;

    return nrLinesRemoved === 0 ? board : addEmptyLines(linesWithoutFilled, nrLinesRemoved);
}

const addEmptyLines = (board, nrLines) => [...generateLines(nrLines), ...board];

export const calculatePiecePositions = ({ type, x, y, angle }) => {
    switch(type) {
        case PIECE_TYPE.I:
            if (angle === 0 || angle === 180){
                return [{ x: x-1, y }, { x, y }, { x: x+1, y }, { x: x+2, y } ];
            }
            if(angle === 90){
                return [{ x, y }, { x, y: y+1 }, { x, y: y+2 }, { x, y: y+3 } ];
            }
            return [{ x: x+1, y }, { x: x+1, y: y+1 }, { x: x+1, y: y+2 }, { x: x+1, y: y+3 } ];
        case PIECE_TYPE.J:
            if (angle === 0) {
                return [{ x: x-1, y: y-1 }, { x: x-1, y }, { x, y }, { x: x+1, y } ];
            }
            if (angle === 90) {
                return [{ x: x+1, y: y-1 }, { x, y: y-1 }, { x, y }, { x, y: y+1 } ];
            }
            if (angle === 180) {
                return [{ x: x+1, y: y+1 }, { x: x+1, y }, { x, y }, { x: x-1, y } ];
            }
            return [{ x: x-1, y: y+1 }, { x, y: y-1 }, { x, y }, { x, y: y+1 } ];
        case PIECE_TYPE.L:
            if (angle === 0) {
                return [{ x: x+1, y: y-1 }, { x: x-1, y }, { x, y }, { x: x+1, y } ];
            }
            if (angle === 90) {
                return [{ x: x-1, y: y+1 }, { x, y: y-1 }, { x, y }, { x, y: y+1 } ];
            }
            if (angle === 180) {
                return [{ x: x-1, y: y-1 }, { x: x+1, y }, { x, y }, { x: x-1, y } ];
            }
            return [{ x: x+1, y: y-1 }, { x, y: y-1 }, { x, y }, { x, y: y+1 } ];
        case PIECE_TYPE.O:
            return [{ x, y }, { x: x+1, y }, { x, y: y+1 }, { x: x+1, y: y+1 } ];
        case PIECE_TYPE.S:
            if (angle === 0 || angle === 180){
                return [{ x, y }, { x: x+1, y }, { x, y: y+1 }, { x: x-1, y: y+1 } ];
            }
            return [{ x, y }, { x: x-1, y }, { x: x-1, y: y-1 }, { x, y: y+1 } ];
        case PIECE_TYPE.T:
            if (angle === 0) {
                return [{ x: x-1, y }, { x, y }, { x, y: y-1 }, { x: x+1, y } ];
            }
            if (angle === 90) {
                return [{ x, y: y-1 }, { x, y }, { x, y: y+1 }, { x: x+1, y } ];
            }
            if (angle === 180) {
                return [{ x: x-1, y }, { x, y }, { x, y: y+1 }, { x: x+1, y } ];
            }
            return [{ x, y: y-1 }, { x, y }, { x, y: y+1 }, { x: x-1, y } ];
        case PIECE_TYPE.Z:
            if (angle === 0 || angle === 180){
                return [{ x, y }, { x: x-1, y }, { x, y: y+1 }, { x: x+1, y: y+1 } ];
            }
            return [{ x, y }, { x: x+1, y }, { x, y: y+1 }, { x: x+1, y: y-1 } ];
        default:
            return [];
    }
};