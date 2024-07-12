import React from 'react';
import './navigation.css';

const Header = ({ userUsername, setIsLoggedIn }) => {
  const logout = () => {
    localStorage.removeItem('accessToken');
    setIsLoggedIn(false);
  };

  return (
    <nav className="nav">
      <div className="company-name">
        <h1>Cinema Guru</h1>
      </div>
      <div className="profile-section">
        <img src="https://picsum.photos/100/100" alt="User Avatar" />
        <p>Welcome, {userUsername}</p>
        <span onClick={logout}>
          <i className="icon">🔒</i> Logout
        </span>
      </div>
    </nav>
  );
};

export default Header;
