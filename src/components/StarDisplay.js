import React from "react";
import utils from '../utils';

const starStyle = {
    display: "inline-block",
    margin: "0 15px",
    fontSize: "45px"
}

class StarsDisplay extends React.Component {
    render() {
        return (
            <>
                {utils.range(1, this.props.count).map(starId => (
                    <div key={starId} className="star" style={starStyle} />
                ))}
            </>
        )
    }
}

export default StarsDisplay;