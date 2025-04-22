// src/pages/Login.js
import React from 'react';

function Login() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Login</h2>
      <form>
        <input placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
