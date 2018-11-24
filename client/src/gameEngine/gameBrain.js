import { PIECE_TYPE } from '../constants';
import { isValidPiecePosition, placePieceOnBoard } from './piecePosition';

const left = ( angle ) => angle === 270 ? 0 : angle + 90;
const right = ( angle ) => angle === 0 ? 270 : angle - 90;

export const turnLeft = ({ piece }) => {
    return {
        piece: {
            ...piece,
            angle: left(piece.angle),
        },
    };
};

export const turnRight = ({ piece }) => {
    return {
        piece: {
            ...piece,
            angle: right(piece.angle),
        },
    };
};

export const moveDown =  ({ board, piece }) => {
    const pieceNewLocation = {
        piece: {
            ...piece,
            y: piece.y + 1,
        },
    };

    if (isValidPiecePosition(board, pieceNewLocation.piece)) {
        return pieceNewLocation;
    }
    
    // This is when the piece hits something. We need to move it to the board and get new piece
    return {
        board: placePieceOnBoard(board, piece), 
        piece: {
            type: PIECE_TYPE.J,
            x: 4,
            y: 1,
            angle: 0,
        },
    }
};

export const moveLeft = ({ board, piece }) => {
    const pieceNewLocation = {
        piece: {
            ...piece,
            x: piece.x - 1,
        },
    };

    // Improvement: In this case we didn't need to update state
    return isValidPiecePosition(board, pieceNewLocation.piece) ? pieceNewLocation : piece;
};

export const moveRight = ({ board, piece }) => {
    const pieceNewLocation = {
        piece: {
            ...piece,
            x: piece.x + 1,
        },
    };

    // Improvement: In this case we didn't need to update state
    return isValidPiecePosition(board, pieceNewLocation.piece) ? pieceNewLocation : piece;
};
