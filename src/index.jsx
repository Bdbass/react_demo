import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'
import App from './components/starGame/App'
import PlayerCard from './components/playerCard/PlayerCard';


// client.query({
//     query: gql`
//     {
//         books {
//             title
//             author
//         }
//     }`
// }).then(results => console.log(results));

ReactDOM.render(
    <>
        <PlayerCard />
        <App />
    </>,
    document.getElementById('app')
);