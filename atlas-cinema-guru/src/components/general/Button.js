import React from 'react';
import './general.css';

const Button = ({ label, className, onClick, icon }) => {
  return (
    <div className={`button-container ${className}`}>
      <button onClick={onClick}>
        {icon && <span className="button-icon">{icon}</span>}
        {label}
      </button>
    </div>
  );
};

export default Button;
