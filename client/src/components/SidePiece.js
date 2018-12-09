import React, { Component } from 'react';
import { string, number } from 'prop-types';
import classNames from 'classnames';
import { withGameProvider } from '../context/withGameProvider';
import { PIECE_TYPE } from '../constants';
import './Board.css';
import './SidePiece.css';

const propTypes= {
    pieceType: string,
    extraClass: string,
};

class Queue extends Component {
    render() {
        const { pieceType, extraClass } = this.props;
        const pieceHtml = this.renderPieceArray(this.getPiecePositions(pieceType), pieceType, extraClass);
        return <div className="queuePieceWrapper">
            { pieceHtml }
        </div>
    }

    getPiecePositions(pieceType) {
            switch(pieceType) {
                default:
                case PIECE_TYPE.I: return [[true, true, true, true]];
                case PIECE_TYPE.J: return [[true, false, false], [true, true, true]];
                case PIECE_TYPE.L: return [[false, false, true], [true, true, true]];
                case PIECE_TYPE.O: return [[true, true], [true, true]];
                case PIECE_TYPE.S: return [[false, true, true], [ true, true, false]];
                case PIECE_TYPE.T: return [[false, true, false], [true, true, true]];
                case PIECE_TYPE.Z: return [[true, true, false], [false, true, true]];
            }
    }

    renderPieceArray(positions, pieceType, extraClass) {
        const pieceClassName = classNames("queuePiece", extraClass);
        return (<div className="queuePieceBorder">
            <div className={ pieceClassName }>
                { positions.map((row, i) => this.renderRow(row, pieceType, i)) }
            </div>
        </div>);
    }

    renderRow(row, pieceType, key) {
        const cellClassName = classNames("queueCell", pieceType);
        return <div className="queueRow" key={ key }> { row.map((t, j) => this.renderCell(t ? cellClassName : "queueCell", j)) } </div>;
    }

    renderCell(cellClassName, key) {
        return (<div className={ cellClassName } key={ key }></div>);
    }
}
Queue.propTypes = propTypes;

export default withGameProvider(Queue);
