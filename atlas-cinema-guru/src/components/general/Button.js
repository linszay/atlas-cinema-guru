import React from 'react';
import './general.css'

const button = ({label, className, onClick, icon}) => {
    return (
        <button className={className} onClick={onClick}>
            <label>{label}</label>
            {icon && <span>{icon}</span>}
        </button>
    )
};

export default button;
