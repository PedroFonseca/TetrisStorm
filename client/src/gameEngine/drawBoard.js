import { PIECE_TYPE } from '../constants';

export const drawBoard = (board, piece) => {
    const piecePositions = calculatePiecePositions(piece);

    return board.map((line, lineNr) => line.map((cell, colNr) => {
        return piecePositions.some((pos) => pos.x === colNr && pos.y === lineNr) ? piece.type : cell}));
};

const calculatePiecePositions = ({ type, x, y, angle }) => {
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