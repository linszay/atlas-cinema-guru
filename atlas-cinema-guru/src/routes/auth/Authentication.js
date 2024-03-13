import React, { useState } from 'react';
import axios from 'axios';
import Login from './Login';
import Register from './Register';

const Authentication = ({ setIsLoggedIn, setUserUsername }) => {
    const [_switch, setSwitch] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        setSwitch(true);
    };

    const handleSignUp = () => {
        setSwitch(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (_switch) {
                const response = await axios.post('/api/auth/login', {
                    username,
                    password
                });
                const token = response.data.token;
                localStorage.setItem('token', token);
                setUserUsername(username);
                setIsLoggedIn(true);
            } else {
                const response = await axios.post('/api/auth/register', {
                    username,
                    password
                });
                const token = response.data.token;
                localStorage.setItem('token', token);
                setUserUsername(username);
                setIsLoggedIn(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignUp}>Sign Up</button>
            {_switch ? <Login username={username} setUsername={setUsername} password={password} setPassword={setPassword}/> : <Register username={username} setUsername={setUsername} password={password} setPassword={setPassword}/>}
        </form>
    );
};

export default Authentication;
