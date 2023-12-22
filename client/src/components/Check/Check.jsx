import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import MySpinner from "../Spinner";
import { validateAppId } from "../../utils/validations/dataValidations";
import styles from "./check.module.css";

const Check = () => {
  const [app_id, setAppId] = useState("");
  const [errors, setErrors] = useState(false);
  const [errorLog, setErrorLog] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);

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
    setIsLoading(true);

    const [isValid, errorMsg] = validateAppId(app_id);

    if (!isValid) {
      setIsLoading(false); // Spinner should be disabled
      setErrors(true);
      setErrorLog(errorMsg);
    } else {
      // Form is valid
      // Faking an API call (temporary)
      setTimeout(() => {
        setIsLoading(false);
        setIsFetched(true);
        console.log("form submitted");
        console.log(app_id);
      }, 3000);
    }
  };

  return (
    <div className="form" style={{ minWidth: "700px", maxWidth: "65%" }}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Check Appointment Details</h1>
      </div>

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

        <button
          type="submit"
          onClick={handleSubmit}
          className={isFetched ? styles.buttonSubmitted : styles.button}
          disabled={isLoading || isFetched}
        >
          {isLoading && <MySpinner />}
          {isFetched ? "Fetched" : "Check"}
        </button>
      </Form>
    </div>
  );
};

export default Check;
