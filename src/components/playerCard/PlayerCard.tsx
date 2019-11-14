import React, { useState } from "react";
import Form from "./Form";
import CardList from "./CardList"
import { CardProps } from "./Card";
import { headerStyle } from './style';

const App = (props: { title: string }) => {
    const [profiles, setProfiles] = useState<CardProps[]>([]);

    const addNewProfile = (profileData: CardProps) => {
        setProfiles([...profiles, profileData]);
    };

    return (
        <div>
            <div style={headerStyle}>{props.title}</div>
            <Form onSubmit={addNewProfile} />
            <CardList profiles={profiles} />
        </div>
    );
}

export default function PlayerCard() {
    return (
        <App title="Star Game!!" />
    );
}