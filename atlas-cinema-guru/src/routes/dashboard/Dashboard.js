import React from 'react';
import './dashboard.css';
import Header from '../../components/navigation/Header.js';

const Dashboard = ({ userUsername, setIsLoggedIn }) => {
    return (
        <div>
            <Header userUsername={userUsername} setIsLoggedIn={setIsLoggedIn} />
        </div>
    );
};

export default Dashboard;
