import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer app-footer m-0">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 mb-4 mb-lg-0">
              <div className="footer-logo">
                <span className="footer-logo-text fs-1">
                  <b>RnR</b>
                </span>
              </div>
              <p className="footer-desc"></p>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h4 className="footer-title">Our Store</h4>
              <ul className="footer-link-list">
                <li>
                  <a href="#">Store App</a>
                </li>
                <li>
                  <a href="#">Order Status</a>
                </li>
                <li>
                  <a href="#">Shopping Help</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h4 className="footer-title">Help Center</h4>
              <ul className="footer-link-list">
                <li>
                  <a href="#">Contact Form</a>
                </li>
                <li>
                  <a href="#">Live Chat Support</a>
                </li>
                <li>
                  <a href="#">Portal Help Center</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 mb-4 mb-lg-0">
              <h4 className="footer-title ">Follow Us</h4>
              <div className="footer-media-list">
                <a href="#" className="me-1">
                  <i className="fab fa-lg fa-facebook fa-fw" />
                </a>
                <a href="#" className="me-2">
                  <i className="fab fa-lg fa-instagram fa-fw" />
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#" className="me-2">
                  <i className="fab fa-lg fa-linkedin fa-fw" />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12 text-center mb-3 mb-lg-0">
                <div className="footer-copyright-text">
                  Copyright © 2023 PearlArc Systems Private Limited. All rights
                  reserved
                </div>
              </div>
              <div className="col-lg-12 text-center">
                <p className="text-center margin-clear col-md-12">
                  <a target="_self" href="#">
                    Terms
                  </a>
                  |
                  <a target="_self" href="#">
                    Privacy
                  </a>
                  |
                  <a target="_self" href="#">
                    Cookies
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
