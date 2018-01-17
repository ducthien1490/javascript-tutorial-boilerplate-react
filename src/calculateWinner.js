import _ from 'lodash';

export default function calculateWinner(squares, row, col) {
  const colsRange = _.filter(_.range(col - 2, col + 3), (val) => { return val >= 0});
  const rowsRange = _.filter(_.range(row - 2, row + 3), (val) => { return val >= 0});
  const horizontalLine = colsRange.map((col) => {
    return `${row}-${col}`;
  });
  const verticalLine = rowsRange.map((row) => {
    return `${row}-${col}`;
  });
  const digonalDownLine = _.compact(_.range(-2, 3).map((val) => {
    if(row + val < 0 || col + val < 0) return null;
    return `${row + val}-${col + val}`;
  }));
  const digonalUpLine = _.compact(_.range(-2, 3).map((val) => {
    if(row + val < 0 || col + val < 0) return null;
    return `${row - val}-${col + val}`;
  }));

  const lines = [verticalLine, horizontalLine, digonalUpLine, digonalDownLine];

  for(let i = 0; i < lines.length; i++) {
    const result = checkWinner(squares, lines[i]);
    if(result) {
      return result;
    }
  }
  return null;
}

function checkWinner(squares, line) {
  for(let i = 0; i < line.length - 2; i++) {
    const subLine = line.slice(i, i + 3);
    const [val1, val2, val3] = subLine.map((position) => {
      return squares[position];
    });
    if(val1 && val1 === val2 && val2 === val3) {
      return subLine;
    }
  }
  return null;
}
