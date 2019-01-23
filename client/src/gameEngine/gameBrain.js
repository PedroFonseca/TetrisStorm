import { isValidPiecePosition, placePieceOnBoard, getPieceValidPosition } from './piecePosition';
import { getRandomPiece } from '../util/helperFunctions';

const left = ( angle ) => angle === 270 ? 0 : angle + 90;
const right = ( angle ) => angle === 0 ? 270 : angle - 90;

export const turnLeft = ({ board, piece }) => {
    return {
        piece: getPieceValidPosition(board, {
            ...piece,
            angle: left(piece.angle),
        }),
    };
};

export const turnRight = ({ board, piece }) => {
    return {
        piece: getPieceValidPosition(board, {
            ...piece,
            angle: right(piece.angle),
        }),
    };
};

export const moveDown =  ({ board, piece, queue, lines }) => {
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
    const result = placePieceOnBoard(board, piece);

    return {
        board: result.board,
        piece: getNewPiece(queue[0]),
        queue: [ ...queue.slice(1), getRandomPiece() ],
        lines: lines + result.nrLinesRemoved,
    };
};

const getNewPiece = (pieceType) => ({  
    type: pieceType,
    x: 4,
    y: 1,
    angle: 0,
})

export const drop = ({ board, piece, queue, lines }) => {
    let result = moveDown({ board, piece, queue, lines });
    while(!result.board){
        result = moveDown({ board, piece: result.piece, queue, lines });
    }
    return result;
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

export const pocket = ({ piece, queue, pocket }) => {
    return {
        piece: getNewPiece(pocket !== undefined ? pocket : queue[0]),
        queue: pocket !== undefined ? queue : [ ...queue.slice(1), getRandomPiece() ],
        pocket: piece.type,
    }
}