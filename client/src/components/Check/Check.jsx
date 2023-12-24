import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import MySpinner from "../Spinner";
import { validateAppId } from "../../utils/validations/dataValidations";
import { postAppId } from "../../utils/postData";
import styles from "./check.module.css";

const Check = () => {
  const [app_id, setAppId] = useState({ app_id: "" });
  const [errors, setErrors] = useState(false);
  const [errorLog, setErrorLog] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [response, setResponse] = useState({});

  const setField = (value) => {
    // new entry being inserted
    setIsFetched(false);

    setAppId({
      app_id: value,
    });

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

    const submitRequest = async () => {
      try {
        const res = await postAppId(app_id);
        setIsLoading(false);
        setIsFetched(true);
        setResponse(res);
        console.log("application details fetched");
        console.log(res);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };

    if (!isValid) {
      setIsLoading(false); // Spinner should be disabled
      setErrors(true);
      setErrorLog(errorMsg);
    } else {
      console.log(app_id);
      submitRequest();
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
            placeholder="Enter your appointment id"
            value={app_id.app_id}
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
        <pre className="fs-4 fw-bold">
          {isFetched && Object.keys(response.data).length > 0 ? JSON.stringify(response.data, undefined, 2) : ""}
        </pre>
      </Form>
    </div>
  );
};

export default Check;
