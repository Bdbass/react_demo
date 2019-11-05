import React from "react";
import Game from "./Game";

class StarMatch extends React.Component {
    //constructor :(
    //this :(
    constructor(props) {
        super(props);
        this.state = {
            gameId: 0
        };
    }

    render() {
        return (
            <Game key={this.state.gameId} startNewGame={() => this.setState({ gameId: this.state.gameId + 1 })} />
        );
    }
}

export default function App() {
    return (
        <StarMatch />
    );
}