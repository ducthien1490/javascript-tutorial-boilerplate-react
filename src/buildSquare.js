export default function buildSquare(rows, cols) {
  let squares = {};
  [...Array(rows)].map((_, row) => {
    return [...Array(cols)].map((_, col) => {
      return squares[`${row}-${col}`] = null;
    })
  })
  return squares;
}
