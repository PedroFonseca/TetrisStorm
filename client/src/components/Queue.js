import React, { Component } from 'react';
import { string, arrayOf } from 'prop-types';
import classNames from 'classnames';
import { withGameProvider } from '../context/withGameProvider';
import SidePiece from './SidePiece';
import './Queue.css';

const propTypes= {
   queue: arrayOf(string),
};

class Queue extends Component {
    render() {
        return (
            <div className="queue">
                <div className="nextText">NEXT</div>
                { this.props.queue.map((t, i) => <SidePiece pieceType={t} extraClass={ classNames({ "first": i === 0, "second": i === 1 }) } key={ i } />) }
            </div>
        );
    }
}
Queue.propTypes = propTypes;

export default withGameProvider(Queue);
