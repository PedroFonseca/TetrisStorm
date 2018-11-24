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

export const moveDown =  ({ piece }) => {
    return {
        piece: {
            ...piece,
            y: piece.y + 1,
        },
    };
};

export const moveLeft = ({ piece }) => {
    return {
        piece: {
            ...piece,
            x: piece.x - 1,
        },
    };
};

export const moveRight = ({ piece }) => {
    return {
        piece: {
            ...piece,
            x: piece.x + 1,
        },
    };
};