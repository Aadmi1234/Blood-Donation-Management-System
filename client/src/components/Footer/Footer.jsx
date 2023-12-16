import React from "react";
import Container from "react-bootstrap/esm/Container";

import styles from "./styles.module.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <Row>
          {/* Column 1 */}
          <Col className="md-3 sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </Col>
          {/* Column 2 */}
          <Col className="md-3 sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </Col>
          {/* Column 3 */}
          <Col className="md-3 sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </Col>
          {/* Column 4 */}
          <Col className="md-3 sm-6">
            <h4>Lorem ipsum</h4>
            <ul className="list-unstyled">
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
              <li>lorem ipsum</li>
            </ul>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="text-xs-center">
            &copy; Copyright {new Date().getFullYear()} - Blood Donation
            Management System. All Rights Reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
