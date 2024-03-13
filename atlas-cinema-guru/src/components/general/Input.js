import React from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
    const handleInput = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label>{label}</label>
            <input 
                type={type} 
                className={className} 
                value={value} 
                onChange={handleInput} 
                {...inputAttributes}
            >
                {icon && <span>{icon}</span>}
            </input>
        </div>
    );
};

export default Input;
