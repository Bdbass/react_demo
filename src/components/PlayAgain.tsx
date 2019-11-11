import React from "react";

interface PlayAgainProps {
    gameStatus: string;
    onClick: () => void;
}

const PlayAgain = (props: PlayAgainProps) => (
    <div className="game-done">
        <div
            className="message"
            style={{ color: props.gameStatus === 'lost' ? 'red' : 'green' }}
        >
            {props.gameStatus === 'lost' ? 'Game Over' : 'Nice'}
        </div>
        <button onClick={props.onClick}>Play Again</button>
    </div>
);

export default PlayAgain;