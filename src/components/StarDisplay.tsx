import React from "react";
import utils from '../utils';

const starStyle = {
    display: "inline-block",
    margin: "0 15px",
    fontSize: "45px"
}

interface StarsDisplayProps {
    count: number;
}

const StarsDisplay = (props: StarsDisplayProps) => {
    return (
        <>
            {utils.range(1, props.count).map(starId => (
                <div key={starId} className="star" style={starStyle} />
            ))}
        </>
    )
}


export default StarsDisplay;