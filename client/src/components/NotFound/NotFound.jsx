import React from "react";
import { Link } from "react-router-dom";
import Error from "/not-found.jpg";
import styles from "./styles.module.css";

const NotFound = () => {
  const scrollToTop = () => window.scrollTo(0, 0);

  return (
    <div className={styles.container}>
      <h1 className={styles.msg}>OOPS!!! Page Not Found...</h1>
      <img className={styles.image} src={Error} alt="" />
      <Link to="/" onClick={scrollToTop}>
        <button size="lg" className={styles.button}>
          Redirect to home page
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
