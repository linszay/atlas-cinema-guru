import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
    const logout = () => {
        localStorage.removeItem('accessToken');
        setIsLoggedIn(false);
    };

    return (
        <nav>
            <img src="https://picsum.photos/100/100" alt="Avatar" />
            <p>Welcome, {userUsername}</p>
            <span onClick={logout}>
                <i className="logout-icon"></i> Logout
            </span>
        </nav>
    );
};

export default Header;
