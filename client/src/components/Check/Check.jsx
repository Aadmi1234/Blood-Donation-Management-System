import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { validateAppId } from "./validateAppId";
import styles from "./check.module.css";

const Check = () => {
  const [app_id, setAppId] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorLog, setErrorLog] = useState("");

  const setField = (value) => {
    setAppId(value);

    if (!!errors) {
      // There was an error but change encountered
      setErrors(false);
      setErrorLog("");
    }

    // console.log(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const [isValid, errorMsg] = validateAppId(app_id);

    if (!isValid) {
      setErrors(true);
      setErrorLog(errorMsg);
    } else {
      console.log("form submitted");
      console.log(app_id);
    }
  };

  return (
    <div className="form">
      <h1 className="form-name">Check Appointment Details</h1>

      <Form>
        <InputGroup size="lg">
          <InputGroup.Text>Appointment Id</InputGroup.Text>
          <Form.Control
            type="plaintext"
            placeholder="Enter 10-dig appointment id"
            value={app_id}
            onChange={(e) => setField(e.target.value)}
            isInvalid={errors}
          />
          <Form.Control.Feedback type="invalid">
            {errorLog}
          </Form.Control.Feedback>
        </InputGroup>

        <button type="submit" onClick={handleSubmit} className={styles.button}>
          Search
        </button>
      </Form>
    </div>
  );
};

export default Check;
