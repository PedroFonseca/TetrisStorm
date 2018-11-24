import React, { Component } from 'react';
import { number } from 'prop-types';
import { generateArray } from '../util/helperFunctions';
import './Board.css';

const propTypes= {
   lines: number,
   columns: number,
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
          { this._renderLines() }
        </div>
    );
  }

  renderLines() {
    return generateArray(this.props.lines).map(this._renderLine);
  }

  renderLine(lineNr) {
    return (<div className="Line">
      { generateArray(this.props.columns).map(t => this._renderCol(lineNr, t)) }
    </div>);
  }

  renderCol(lineNr, colNr) {
    return (<div className="Cell">
      {lineNr}, { colNr }
    </div>);
  }
}
Board.propTypes = propTypes;

export default Board;
