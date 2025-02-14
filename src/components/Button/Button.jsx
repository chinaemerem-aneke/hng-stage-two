import React from 'react';
import './Button.css';

const Button = ({ type = 'button', onClick, children, className = '', variant = 'primary', disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn ${variant} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;