import React, { useEffect } from "react";
import ErrorImg from "../../assets/404.svg";

const Failed = ({message}) => {
  const imgStyles = {
    height: "500px",
    objectFit: "contain",
    marginBottom: "20px",
    border: "3px solid black",
    borderRadius: "10px",
  };

  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <img src={ErrorImg} alt="" style={imgStyles} />
      <h1 style={{ textDecoration: "underline 3px solid var(--level-1)" }}>
        {message}
      </h1>
    </div>
  );
};

export default Failed;
