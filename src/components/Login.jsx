import { useState } from "react";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import "../styles/login.css";

const Login = () => {
  const [action, setAction] = useState("Login");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" placeholder="Name" />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email Id" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>
        <div className="submit-container">
          <div className="submit" onClick={() => setAction("Login")}>
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
