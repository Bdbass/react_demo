import React, { useState } from "react";
import { CardProps } from "./Card";
import { formStyle } from './style';
import { gql } from 'apollo-boost';
import client from '../apollo';

interface FormProps {
    onSubmit: (a: CardProps) => void;
}

const USER_QUERY = gql`
 query User($userName: String!){
    user(username: $userName){
        name
        company
        avatar_url
        id
      }
}
`

const Form = (props: FormProps) => {
    const [userName, setUserName] = useState('');
    const getUser = async (e: React.FormEvent) => {
        e.preventDefault();
        const result = await client.query({ query: USER_QUERY, variables: { userName: userName } });
        console.log(result.data.user);
        props.onSubmit(result.data.user);
    }

    return (
        <form
            onSubmit={(e) => {
                getUser(e);
                setUserName('');
            }}
            style={formStyle}>
            <input
                type="text"
                value={userName}
                onChange={event => setUserName(event.target.value)}
                placeholder="Enter your username"
                required
            />
            <button>Add Profile</button>
        </form>
    );
}

export default Form;