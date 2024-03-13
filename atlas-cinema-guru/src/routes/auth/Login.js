import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
    return (
        <div>
            <input type="text" placeholder='Username:' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Submit</button>
        </div>
    );
};

export default Login;
