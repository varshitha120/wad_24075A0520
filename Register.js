// src/pages/Register.js
import React from 'react';

function Register() {
  return (
    <div style={{ padding: '20px' }}>
      <h2>Register</h2>
      <form>
        <input placeholder="Username" /><br />
        <input placeholder="Email" /><br />
        <input type="password" placeholder="Password" /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
