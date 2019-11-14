import React from "react";
import { profileStyle, imgStyle, infoStyle, nameStyle } from './style';

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