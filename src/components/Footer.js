import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Located in Los Angeles, California</p>
            </div>
            <div className="d-flex">
              <a href="tel:8184009601">818-400-9601</a>
            </div>
            <div className="d-flex">
              <p>garrettgoodenough18@yahoo.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <Link smooth={true} to="home" className="footer-nav" href="#">
                  Home
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="about"
                  offset={-87}
                  className="footer-nav"
                  href="#"
                >
                  About
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="portfolio"
                  offset={-87}
                  className="footer-nav"
                  href="#"
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  smooth={true}
                  to="contact"
                  offset={-87}
                  className="footer-nav"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
