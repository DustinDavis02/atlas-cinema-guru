import React from 'react';
import './general.css';

const SearchBar = ({ title, setTitle }) => {
  const handleInput = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="searchbar-container">
      <input
        type="text"
        value={title}
        onChange={handleInput}
        placeholder="Search Movies"
      />
    </div>
  );
};

export default SearchBar;
