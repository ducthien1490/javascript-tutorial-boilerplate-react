import React from 'react';
import PropTypes from 'prop-types';
import Board from './Board';
import calculateWinner from '../calculateWinner'
import buildSquare from '../buildSquare'
import './Game.css';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: buildSquare(this.props.rows, this.props.cols)
      }],
      stepNumber: 0,
      xIsNext: true,
      winningLine: null,
      moves: []
    };
  }

  handleClick(row, col) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = Object.assign({}, current.squares);
    const moves = this.state.moves.slice(0, this.state.stepNumber + 1);
    if (this.state.winningLine || squares[`${row}-${col}`]) {
      return;
    }
    squares[`${row}-${col}`] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squares}]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
      winningLine: calculateWinner(squares, row, col),
      moves: moves.concat([`${row}-${col}`])
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move} (${this.state.moves[move - 1]})` : "Go to game start";

      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    });
    let status = `Next player: ${this.state.xIsNext ? "X" : "O"} `;
    if (this.state.winningLine) {
      const winner = this.state.xIsNext ? "O" : "X";
      status = `Winner: ${winner}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(row, col) => this.handleClick(row, col)}
            rows={this.props.rows}
            cols={this.props.cols}
            winningSquares={this.state.winningLine}
            currentMove={this.state.moves[this.state.stepNumber - 1]}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

Game.propTypes = {
  rows: PropTypes.number,
  cols: PropTypes.number
}
