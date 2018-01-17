import React from 'react';
import Square from './Square';

export default class Row extends React.Component {
  renderSquare(row, col) {
    return (
      <Square
        key={`${row}_${col}`}
        value={this.props.squares[`${row}-${col}`]}
        onClick={() => this.props.squareClick(row, col)}
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
