import React from "react";
import "../styles/footer.css";
import logo from "../assets/happy-test.png";
const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <img src={logo} alt="Mental Health Logo" />
        </div>
        <div class="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <div class="footer-social">
            <ul>
              <li>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-info">
        <p>&copy; 2023 Mental Health Website</p>
        <p>Privacy Policy | Terms of Use</p>
      </div>
    </footer>
  );
};
export default Footer;
