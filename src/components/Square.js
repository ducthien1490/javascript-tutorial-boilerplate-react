import React from 'react';

export default function Square(props) {
  const squareClassName = () => {
    let className = ['square'];
    if(props.isWinSquare) {
      className.push('win-square');
    }
    if(props.isCurrentMove) {
      className.push('current-move');
    }
    return className.join(" ");
  }

  return (
    <button
      className={squareClassName()}
      onClick={props.onClick}>
      {props.value}
    </button>
  )
}
