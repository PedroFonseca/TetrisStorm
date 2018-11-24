import React, { Component } from 'react';
import { number, array } from 'prop-types';
import classNames from 'classnames';
import { withGameProvider } from '../context/withGameProvider';
import './Board.css';

const propTypes= {
   lines: number,
   columns: number,
   board: array,
};

class Board extends Component {
  constructor(props) {
    super(props);

    this._renderLines = this.renderLines.bind(this);
    this._renderLine = this.renderLine.bind(this);
    this._renderCol = this.renderCol.bind(this);
  }

  render() {
    return (
        <div className="Board">
          { this.renderLines(this.props.board) }
        </div>
    );
  }

  renderLines(board) {
    return board.map((col, index) => this.renderLine(col, index));
  }

  renderLine(col, lineNr) {
    return (<div className="Line" key={ lineNr }>
      { col.map((cell, index) => this.renderCol(cell, lineNr, index)) }
    </div>);
  }

  renderCol(cell, lineNr, colNr) {
    return (<div className={ classNames("Cell", cell) } key={`${lineNr} - ${colNr}`}>&nbsp;</div>);
  }
}
Board.propTypes = propTypes;

export default withGameProvider(Board);
