import { useState, useEffect, useContext } from "react";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";
import "../styles/login.css";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Login = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    if (isLoading) return;
    e.preventDefault();
    await login(email, password);
  };

  useEffect(() => {
    // reroute to home page after login
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [user]);

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
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
            Login
          </div>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;
