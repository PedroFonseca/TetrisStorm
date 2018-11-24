import { calculatePiecePositions } from './piecePosition';

export const drawBoard = (board, piece) => {
    const piecePositions = calculatePiecePositions(piece);

    return board.map((line, lineNr) => line.map((cell, colNr) => {
        return piecePositions.some((pos) => pos.x === colNr && pos.y === lineNr) ? piece.type : cell}));
};
