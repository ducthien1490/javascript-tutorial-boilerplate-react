import React from 'react';
import Square from './Square';
import _ from 'lodash'

export default class Row extends React.Component {
  renderSquare(row, col) {
    const isWinSquare = () => {
      const winningSquares = this.props.winningSquares;
      return this.props.winningSquares && _.includes(winningSquares, `${row}-${col}`)
    }
    const isCurrentMove = () => {
      return `${row}-${col}` === this.props.currentMove;
    }
    return (
      <Square
        key={`${row}_${col}`}
        value={this.props.squares[`${row}-${col}`]}
        onClick={() => this.props.squareClick(row, col)}
        isWinSquare={isWinSquare()}
        isCurrentMove={isCurrentMove()}
      />
    )
  }

  render() {
    return (
      <div className="board-row">
        {[...Array(this.props.cols)].map((_, col) => {
          return this.renderSquare(this.props.row, col);
        })}
      </div>
    )
  }
}
