import React from 'react';
import './auth.css';

const Login = ({ username, password, setUsername, setPassword }) => {
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
        autoComplete="current-password"
      />
      <button type="submit">Log In</button>
    </>
  );
};

export default Login;
