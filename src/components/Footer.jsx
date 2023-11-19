import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <div className="container-fluid">
    <footer>
      <div className="row">
        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Contact Us</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <h6 className="p-0 text-body-secondary">
                sukoon123@gmail.com
              </h6>
            </li>
            <li className="nav-item mb-2">
              <h6 className="p-0 text-body-secondary">
                9584XXXXXX
              </h6>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">get started</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/signup" className="nav-link p-0 text-body-secondary">
              <h6>Sign Up</h6>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/login" className="nav-link p-0 text-body-secondary">
              <h6>Login</h6>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="text-uppercase">Support Hub</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="/gethelp" className="nav-link p-0 text-body-secondary">
              <h6>Get Help</h6>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="/test" className="nav-link p-0 text-body-secondary">
              <h6>Take a Quiz</h6>
              </a>
            </li>
          </ul>
        </div>

        <div className="offset-md-1 col-md-2 mb-1" style={{ margin: "0.5rem" }}>
          <h2 className="ms-1">Sukoon</h2>
          <ul className="list-unstyled d-flex">
            <li>
              <a href="https://www.instagram.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/4138/4138124.png"
                  alt="Instagram"
                />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2626/2626269.png"
                  alt="Facebook"
                />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png"
                  alt="Twitter"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/">
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2626/2626273.png"
                  alt="LinkedIn"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  </div>
);

export default Footer;
