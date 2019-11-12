import React from "react";
import Card, { CardProps } from "./Card";

interface CardListProps {
    profiles: CardProps[]
}

const CardList = (props: CardListProps) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
);

export default CardList;