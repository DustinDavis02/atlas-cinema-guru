import React from 'react';
import './general.css';

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {
  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={`input-container ${className}`}>
      {label && <label>{label}</label>}
      <div style={{ position: 'relative' }}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          type={type}
          value={value}
          onChange={handleInput}
          {...inputAttributes}
          style={{ paddingRight: icon ? '30px' : '10px' }}
        />
      </div>
    </div>
  );
};

export default Input;
