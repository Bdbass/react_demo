import React, { useState } from "react";
import axios from "axios";
import { CardProps } from "./Card";


const formStyle = {
    border: "thin solid #ddd",
    backgroundColor: "#fbfbfb",
    padding: "2rem",
    marginBottom: "2rem",
    display: "flex",
    justifyContent: "center"
}

interface FormProps {
    onSubmit: (a: CardProps) => void;
}

const Form = (props: FormProps) => {
    const [userName, setUserName] = useState('');
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const resp = await axios.get(`https://api.github.com/users/${userName}`);
        props.onSubmit(resp.data);
        setUserName('');
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
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