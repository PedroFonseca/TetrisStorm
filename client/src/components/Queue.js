import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { withGameProvider } from '../context/withGameProvider';
import { PIECE_TYPE } from '../constants';
import './Board.css';
import './Queue.css';

const propTypes= {
   queue: arrayOf(string),
};

class Queue extends Component {
  constructor(props) {
    super(props);

    this._renderPiece = this.renderPiece.bind(this);
  }

  render() {
    return (
        <div className="queue">
          {/* { this.renderLines(this.props.board) } */}
          { this.renderPiece(PIECE_TYPE.I, "first") }
          { this.renderPiece(PIECE_TYPE.I, "second") }
          { this.renderPiece(PIECE_TYPE.I) }
          { this.renderPiece(PIECE_TYPE.J) }
          { this.renderPiece(PIECE_TYPE.L) }
          { this.renderPiece(PIECE_TYPE.O) }
          { this.renderPiece(PIECE_TYPE.S) }
          { this.renderPiece(PIECE_TYPE.T) }
          { this.renderPiece(PIECE_TYPE.Z) }
        </div>
    );
  }

  renderPiece(pieceType, extraClass) {
    return this.renderPieceArray(this.getPiecePositions(pieceType), pieceType, extraClass);
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
        return (<div className="queuePieceWrapper">
            <div className="queuePieceBorder">
                <div className={ pieceClassName }>
                    { positions.map(row => this.renderRow(row, pieceType)) }
                </div>
            </div>
        </div>);
    }

    renderRow(row, pieceType) {
        const cellClassName = classNames("queueCell", pieceType);
        return <div className="queueRow"> { row.map(t => this.renderCell(t ? cellClassName : "queueCell")) } </div>;
    }

    renderCell(cellClassName) {
        return (<div className={ cellClassName }></div>);
    }

  renderPieceJ(isFirst){
    const pieceClassName = classNames("queuePiece", { "first": isFirst });
    const cellClassName = classNames("queueCell", "J");
    return (<div className={ pieceClassName }>
        <div>
            <div className={ cellClassName }></div>
            <div className="queueCell"></div>
            <div className="queueCell"></div>
        </div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
    </div>);
  }
  
  renderPieceL() {
    const cellClassName = classNames("queueCell", "L");
    return (<div>
        <div>
            <div className="queueCell"></div>
            <div className="queueCell"></div>
            <div className={ cellClassName }></div>
        </div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
    </div>);
  }
  renderPieceO() {
    const cellClassName = classNames("queueCell", "O");
    return (<div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
    </div>);
  }
  renderPieceS() {
    const cellClassName = classNames("queueCell", "S");
    return (<div>
        <div>
            <div className="queueCell"></div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
            <div className="queueCell"></div>
        </div>
    </div>);
  }
  renderPieceT() {
    const cellClassName = classNames("queueCell", "T");
    return (<div>
        <div>
            <div className="queueCell"></div>
            <div className={ cellClassName }></div>
            <div className="queueCell"></div>
        </div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
    </div>);

  }
  renderPieceZ() {
    const cellClassName = classNames("queueCell", "Z");
    return (<div>
        <div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
            <div className="queueCell"></div>
        </div>
        <div>
            <div className="queueCell"></div>
            <div className={ cellClassName }></div>
            <div className={ cellClassName }></div>
        </div>
    </div>);
  }
}
Queue.propTypes = propTypes;

export default withGameProvider(Queue);
