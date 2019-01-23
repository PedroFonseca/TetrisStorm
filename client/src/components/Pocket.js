import React, { Component } from 'react';
import { string } from 'prop-types';
import { withGameProvider } from '../context/withGameProvider';
import SidePiece from './SidePiece';
import './Pocket.css';

const propTypes= {
    pocket: string,
};

class Pocket extends Component {
    render() {
        return (
            <div className="pocket">
                <div className="linesText">Lines</div>
                <div className="linesValue">{this.props.lines}</div>
                <div className="holdText">HOLD</div>
                <SidePiece pieceType={ this.props.pocket } extraClass="first" />
            </div>
        );
    }
}
Pocket.propTypes = propTypes;

export default withGameProvider(Pocket);
