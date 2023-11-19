import React from "react";
import "../styles/footer.css";

const Footer = () => (
  <div className="container-fluid">
    <footer>
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h2 className="text-uppercase">Contact Us</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <h5>sukoon123@gmail.com</h5>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <h5>9584XXXXXX</h5>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                <h5>Home</h5>
              </a>
            </li>
          </ul>
        </div>

        <div className="col-6 col-md-2 mb-3 t1">
          <h2 className="text-uppercase">Section</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Home
              </a>
            </li>
          </ul>
        </div>
        <div className="offset-md-1 col-md-5 mb-3">
          <h2>Sukoon</h2>
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
                  src="https://cdn-icons-png.flaticon.com/128/4401/4401454.png"
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
