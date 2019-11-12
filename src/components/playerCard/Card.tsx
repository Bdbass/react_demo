import React from "react";

const profileStyle = {
    margin: "1rem",
    display: "flex",
    justifyContent: "center"
}

const imgStyle = {
    width: "75px"
}

const infoStyle = {
    display: "inline-block",
    marginLeft: "12px",
}

const nameStyle = {
    fontSize: "1.25rem",
    fontWeight: "bold" as "bold"
}



export interface CardProps {
    avatar_url: string;
    name: string;
    company: string;
    id: string;
}

const Card = (props: CardProps) => {

    const profile = props;

    return (
        <div style={profileStyle}>
            <img style={imgStyle} src={profile.avatar_url} />
            <div style={infoStyle}>
                <div style={nameStyle}>{profile.name}</div>
                <div className="company">{profile.company}</div>
            </div>
        </div>
    );
}

export default Card; 