import React from "react";

const FooterIcons = () => {
  const iconStyle = {
    padding: "0.8rem",
    backgroundColor: "black",
    color: "var(--level-4)",
    margin: "0.5rem",
    borderRadius: "50%",
    fontSize: "1.4rem",
  };
  return (
    <div className="mb-2">
      <a
        href="https://github.com/Aadmi1234/Blood-Donation-Management-System"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-github" style={iconStyle}></i>
      </a>
      <a
        href="https://www.docker.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-docker" style={iconStyle}></i>
      </a>
      <a
        href="https://drive.google.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa-brands fa-google-drive" style={iconStyle}></i>
      </a>
    </div>
  );
};

export default FooterIcons;
