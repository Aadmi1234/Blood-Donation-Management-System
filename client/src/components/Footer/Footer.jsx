import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import styles from "./footer.module.css";
import FooterIcons from "./FooterIcons";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          {/* Column 1 */}
          <Col className={`col-lg-5 col-md-6 col-12 ${styles.ft1}`}>
            <img src="/blood-donation1.svg" alt="" className={styles.logo} />
            <h3 className={styles.h3}>
              <span className={styles.webname}>
                Blood Donation Management System
              </span>
            </h3>
            <FooterIcons />
          </Col>

          <Col className="col-lg-1 col-md-1 col-1">
            <div className={styles.verticalLine}></div>
          </Col>

          {/* Column 2 */}
          <Col className={`col-lg-3 col-md-6 col-13 ${styles.ft2}`}>
            <h3 className={styles.h3}>Quick Links</h3>
            <ul className={`list-unstyled ${styles.ulist}`}>
              <li className={styles.ulistli}>
                <a href="/" className="nav-link">
                  <i class="fa-solid fa-arrow-right" /> Home
                </a>
              </li>
              <li className={styles.ulistli}>
                <a href="/centers" className="nav-link">
                  <i class="fa-solid fa-arrow-right" /> Centers
                </a>
              </li>
              <li className={styles.ulistli}>
                <a href="/donate" className="nav-link">
                  <i class="fa-solid fa-arrow-right" /> Donate
                </a>
              </li>
              <li className={styles.ulistli}>
                <a href="/check" className="nav-link">
                  <i class="fa-solid fa-arrow-right" /> Check
                </a>
              </li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col className={`col-lg-3 col-md-6 col-13 ${styles.ft2}`}>
            <h3 className={styles.h3}>Contact Us</h3>
            <ul className={`list-unstyled ${styles.ulist}`}>
              <li className={styles.ulistli}>
                <a
                  href="https://github.com/Aadmi1234/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github" /> &nbsp; Laya Arun
                </a>
              </li>
              <li className={styles.ulistli}>
                <a
                  href="https://www.linkedin.com/in/laya-arun/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin" /> &nbsp; Laya Arun
                </a>
              </li>
              <li className={styles.ulistli}>
                <a
                  href="https://github.com/pranay-sharma03"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-github" /> &nbsp; Pranay Sharma
                </a>
              </li>
              <li className={styles.ulistli}>
                <a
                  href="https://www.linkedin.com/in/pranay-sharma-4b354b173/"
                  className="nav-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="fa-brands fa-linkedin" /> &nbsp; Pranay Sharma
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom mt-3 mb-0 text-align-center">
          <p className={`text-xs-center ${styles.copyright}`}>
            &copy; Copyright {new Date().getFullYear()} - Blood Donation
            Management System. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
