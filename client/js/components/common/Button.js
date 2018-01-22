import React from 'react';

const Button = ({ onClick, text, disabled, className}) => (
    <button disabled={disabled} className={className} onClick={onClick}>{text}</button>
);

export default Button;
