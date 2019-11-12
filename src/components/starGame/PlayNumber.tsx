import React from "react";

// Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};
interface PlayNumberProps {
    status: string;
    number: number;
    onClick: (a: number, status: string) => void;
}

const PlayNumber = (props: PlayNumberProps) => (
    <button
        className="number"
        style={{ backgroundColor: colors[props.status] }}
        onClick={() => props.onClick(props.number, props.status)}
    >
        {props.number}
    </button>
);

export default PlayNumber;