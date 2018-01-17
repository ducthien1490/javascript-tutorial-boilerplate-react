import _ from 'lodahs';

export default function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function checkWinner(squares, row, col) {
  const colsRange = _.filter(_.range(col - 2, row + 3), (val) => { return val >= 0});
  const rowsRange = _.filter(_.range(row - 2, row + 3), (val) => { return val >= 0});
}
