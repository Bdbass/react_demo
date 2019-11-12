import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './components/starGame/App'
import PlayerCard from './components/playerCard/PlayerCard';

ReactDOM.render(
    <>
        <PlayerCard />
        <App />
    </>,
    document.getElementById('app')
);