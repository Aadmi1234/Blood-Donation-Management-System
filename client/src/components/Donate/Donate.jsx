import React from "react";
import RegistrationForm from "./RegistrationForm";
import "./donate.css";

const Donate = ({ centersData }) => {
  return (
    <div className="form">
      <h1 className="form-name">Registration Form for Blood Donation</h1>
      <RegistrationForm centersData={centersData} />
    </div>
  );
};

export default Donate;
