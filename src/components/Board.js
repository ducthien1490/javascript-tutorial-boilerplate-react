import React from 'react';
import Row from './Row'

export default class Board extends React.Component {
  render() {
    return (
      <div>
        {[...Array(this.props.rows)].map((_, row) =>
          <Row
            key={row}
            row={row}
            squareClick={this.props.onClick}
            cols={this.props.cols}
            squares={this.props.squares}
            winningSquares={this.props.winningSquares}
            currentMove={this.props.currentMove}
          />
        )}
      </div>
    );
  }
}
