import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import TimePicker from "react-bootstrap-time-picker";
import { calcAge, calcDOD, isValidEmail, isValidPhone } from "./validations";
import { centerList, genderObject, bloodGroupObject } from "./options";

const RegistrationForm = () => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    sex: "",
    blood_grp: "",
    dob: "",
    address: "",
    email: "",
    phone: "",
    centerid: "",
    dod: "",
    tod: 0,
  });

  const [errors, setErrors] = useState({});

  const [Tnc, setTnc] = useState(false);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });

    if (!!errors[field]) {
      setErrors({
        ...errors,
        [field]: null,
      });
    }

    // console.log(field, value);
    // console.log(form);
  };

  const validateForm = () => {
    const {
      fname,
      lname,
      sex,
      blood_grp,
      dob,
      address,
      email,
      phone,
      centerid,
      dod,
      tod,
    } = form;

    const newErrors = {};

    if (!fname || fname === "")
      newErrors.fname = "Please enter your first name";
    if (!lname || lname === "") newErrors.lname = "Please enter your last name";

    if (!dob || dob === "") {
      newErrors.dob = "Please enter a valid D.O.B";
      form.dob = ""; // clearing the previous value
    } else if (calcAge(dob) < 18)
      newErrors.dob = "Donor needs to be atleast 18 years";

    if (!sex || sex === "") newErrors.sex = "Please select your gender";

    if (!blood_grp || blood_grp === "")
      newErrors.blood_grp = "Please select your blood group";

    if (!address || address === "")
      newErrors.address = "Please enter a valid address";
    else if (address.length < 10)
      newErrors.address = "Entered address is too short";

    if (isValidEmail(email) === false)
      newErrors.email = "Please enter a valid email address";

    if (isValidPhone(phone) === false)
      newErrors.phone = "Please enter a valid phone no.";

    if (!centerid || centerid === "")
      newErrors.centerid = "Please select a donation center";

    if (!dod || dod === "") newErrors.dod = "Please enter a date for donation";
    else if (calcDOD(dod) < 0)
      newErrors.dod = "Enter a valid date for donation";

    if (!tod || tod === 0) newErrors.tod = "Please select an appointment time";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Check if T&C accpeted before submit
      if (!Tnc) {
        alert("Please accept the Terms and Conditions.");
        return;
      }

      console.log("form submitted");
      console.log(form);
    }
  };

  const handleTimeChange = (time) => setField("tod", time);

  return (
    <Form>
      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      {/* Personal Information => First name, Last name, Gender, Blood Group, Address*/}
      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      <h2 className="form-section">Personal Information</h2>
      <Row className="mb-5">
        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Donor Name</InputGroup.Text>
          <Form.Control
            type="plaintext"
            placeholder="First and Middle name"
            value={form.fname}
            onChange={(e) => setField("fname", e.target.value)}
            isInvalid={!!errors.fname}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fname}
          </Form.Control.Feedback>

          <Form.Control
            type="plaintext"
            placeholder="Last name"
            value={form.lname}
            onChange={(e) => setField("lname", e.target.value)}
            isInvalid={!!errors.lname}
          />
          <Form.Control.Feedback type="invalid">
            {errors.lname}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* Gender, Blood Group */}
      <Row className="mb-5">
        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Gender</InputGroup.Text>
          <Form.Select
            value={form.sex}
            onChange={(e) => setField("sex", e.target.value)}
            isInvalid={!!errors.sex}
          >
            <option value="" hidden>
              Select Gender
            </option>
            {Object.entries(genderObject).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.sex}
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Blood Group</InputGroup.Text>
          <Form.Select
            value={form.blood_grp}
            onChange={(e) => setField("blood_grp", e.target.value)}
            isInvalid={!!errors.blood_grp}
          >
            <option value="" hidden>
              Select Blood Group
            </option>
            {Object.entries(bloodGroupObject).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.blood_grp}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* DOB */}
      <Row className="mb-5">
        <InputGroup size="lg" as={Col} style={{ maxWidth: "50%" }}>
          <InputGroup.Text>Date Of Birth</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="dd/mm/yyyy"
            value={form.dob}
            onChange={(e) => setField("dob", e.target.value)}
            isInvalid={!!errors.dob}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dob}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* --------------------------------------------------------------------- */}
      {/* Address Input */}
      {/* --------------------------------------------------------------------- */}
      <Row className="mb-5">
        <InputGroup size="lg">
          <InputGroup.Text>Address</InputGroup.Text>
          <Form.Control
            as="textarea"
            placeholder="Flat no., Street name, City..."
            value={form.address}
            onChange={(e) => setField("address", e.target.value)}
            isInvalid={!!errors.address}
          />
          <Form.Control.Feedback type="invalid">
            {errors.address}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      {/* Contact Details => Email and Phone Number*/}
      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      <h2 className="form-section">Contact details</h2>
      <Row className="mb-5">
        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Email</InputGroup.Text>
          <Form.Control
            type="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={(e) => setField("email", e.target.value)}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Phone no.</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Enter 10-dig phone no."
            value={form.phone}
            onChange={(e) => setField("phone", e.target.value)}
            isInvalid={!!errors.phone}
          />
          <Form.Control.Feedback type="invalid">
            {errors.phone}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      {/* Donation Center Details */}
      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      <h2 className="form-section">Center Details</h2>
      <Row className="mb-5">
        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Center Id</InputGroup.Text>
          <Form.Select
            value={form.centerid}
            onChange={(e) => setField("centerid", e.target.value)}
            isInvalid={!!errors.centerid}
          >
            <option value="" hidden>
              Select Center Id
            </option>
            {centerList.map((centerId, index) => (
              <option key={index} value={centerId}>
                {centerId}
              </option>
            ))}
          </Form.Select>
          <Form.Control.Feedback type="invalid">
            {errors.centerid}
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Center Name</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Center Name"
            value={form.centerid === "" ? "" : form.centerid}
            readOnly
          />
        </InputGroup>
      </Row>

      {/* Date of Donation, Time of Donation */}
      <Row className="mb-4">
        <InputGroup size="lg" as={Col} style={{ maxWidth: "50%" }}>
          <InputGroup.Text>Date Of Donation</InputGroup.Text>
          <Form.Control
            type="date"
            placeholder="dd/mm/yyyy"
            value={form.dod}
            onChange={(e) => setField("dod", e.target.value)}
            isInvalid={!!errors.dod}
          />
          <Form.Control.Feedback type="invalid">
            {errors.dod}
          </Form.Control.Feedback>
        </InputGroup>

        <InputGroup size="lg" as={Col}>
          <InputGroup.Text>Time Of Donation</InputGroup.Text>
          <TimePicker
            start="09:00"
            end="17:30"
            step={30}
            value={form.tod}
            onChange={handleTimeChange}
            isInvalid={!!errors.tod}
          />
          <Form.Control.Feedback type="invalid">
            {errors.tod}
          </Form.Control.Feedback>
        </InputGroup>
      </Row>

      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      {/* Terms and Condition Checkbox */}
      {/* --------------------------------------------------------------------- */}
      {/* --------------------------------------------------------------------- */}
      <Form.Group className="mb-3 terms-checkbox">
        <Form.Check
          size="lg"
          label="Agree to terms and conditions"
          onChange={(e) => setTnc(!Tnc)}
        />
      </Form.Group>

      <button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        className="form-submit-button"
      >
        Register
      </button>
    </Form>
  );
};

export default RegistrationForm;
