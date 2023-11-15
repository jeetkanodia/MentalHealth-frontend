import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import user_icon from "../assets/person.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import "../styles/login.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();
  const handleSubmit = async (e) => {
    if (isLoading) return;
    e.preventDefault();
    await signup(name, email, password);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email Id"
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
          />
        </div>
        <div className="submit-container">
          <div onClick={handleSubmit} className="submit">
            Sign Up
          </div>
        </div>
        {error && <div className="error">{error}</div>}
      </div>
    </div>
  );
};

export default Signup;
