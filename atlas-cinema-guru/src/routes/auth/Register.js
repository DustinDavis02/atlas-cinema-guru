import React from 'react';
import './auth.css';

const Register = ({ username, password, setUsername, setPassword }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        autoComplete="username"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="new-password"
      />
      <button type="submit">Sign Up</button>
    </>
  );
};

export default Register;
