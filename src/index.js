import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<Game rows={50} cols={50} />, mountElement);
