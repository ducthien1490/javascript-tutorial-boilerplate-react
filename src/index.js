import React from 'react';
import ReactDOM from 'react-dom';
import Game from './components/Game';
import './index.css';

const mountElement = document.getElementById('root');

ReactDOM.render(<Game rows={20} cols={20} />, mountElement);
