import React, { useState } from "react";
import email_icon from './Assets/email.png';
import password_icon from './Assets/password.png';
import '../styles/login.css';

const Signup = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt="" />
          <input type='email' placeholder='Email Id' />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input type='password' placeholder='Password' />
        </div>
        <div className='submit-container'>
          <div className="submit" onClick={() => setAction("Sign Up")}>Sign Up</div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
