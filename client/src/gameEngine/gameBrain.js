import { isValidPosition } from './piecePosition';

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

    return isValidPosition(board, pieceNewLocation.piece) ? pieceNewLocation : piece;
};

export const moveLeft = ({ board, piece }) => {
    const pieceNewLocation = {
        piece: {
            ...piece,
            x: piece.x - 1,
        },
    };

    return isValidPosition(board, pieceNewLocation.piece) ? pieceNewLocation : piece;
};

export const moveRight = ({ board, piece }) => {
    const pieceNewLocation = {
        piece: {
            ...piece,
            x: piece.x + 1,
        },
    };

    return isValidPosition(board, pieceNewLocation.piece) ? pieceNewLocation : piece;
};