import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import styles from "./navbar.module.css";
import BloodBag from "/blood-bank.svg";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [currentNavItem, setCurrentNavItem] = useState("home");

  const [title, setTitle] = useState("");

  const handleNavItemClick = (item) => {
    setCurrentNavItem(item);
  };

  const isActive = (item) => {
    return currentNavItem === item ? styles.active : "";
  };

  // To set the currentNavItem to the page it is loaded to
  useEffect(() => {
    const currentPath = window.location.pathname;

    if (currentPath === "/") {
      setCurrentNavItem("home");
    } else {
      setCurrentNavItem(currentPath.slice(1));
    }
  }, [currentNavItem]);

  // To handle resizing of window for responsive navbar
  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the state
      if (window.innerWidth < 1000) {
        setTitle("रक्त दान");
      } else {
        setTitle("Blood Donation Management System");
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Initial check for window width on mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar
        className={styles.navbar}
        // fixed="top"
        collapseOnSelect
        expand="sm"
      >
        <Container className="justify-content-between cnt">
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => handleNavItemClick("home")}
          >
            <img src={BloodBag} alt="" className={styles.blood} />
            <a className={styles.logotitle}>{title}</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav className="mr-auto">
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => handleNavItemClick("home")}
            >
              <a className={`${styles.navlink} ${isActive("home")}`}>Home</a>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/centers"
              onClick={() => handleNavItemClick("centers")}
            >
              <a className={`${styles.navlink} ${isActive("centers")}`}>
                Centers
              </a>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/donate"
              onClick={() => handleNavItemClick("donate")}
            >
              <a className={`${styles.navlink} ${isActive("donate")}`}>
                Donate
              </a>
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/check"
              onClick={() => handleNavItemClick("check")}
            >
              <a className={`${styles.navlink} ${isActive("check")}`}>Check</a>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
