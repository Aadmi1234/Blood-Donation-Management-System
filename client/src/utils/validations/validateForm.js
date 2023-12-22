import {
  calcAge,
  calcDOD,
  isValidEmail,
  isValidPhone,
} from "./dataValidations";

const validateForm = (form) => {
  const {
    fname,
    lname,
    sex,
    blood_grp,
    dob,
    address,
    email,
    phone,
    center_id,
    app_date,
    app_time,
  } = form;

  const newErrors = {};

  if (!fname || fname === "") newErrors.fname = "Please enter your first name";
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

  if (!center_id || center_id === "")
    newErrors.center_id = "Please select a donation center";

  if (!app_date || app_date === "")
    newErrors.app_date = "Please enter a date for donation";
  else if (calcDOD(app_date) < 0)
    newErrors.app_date = "Enter a valid date for donation";

  if (!app_time || app_time === 0)
    newErrors.app_time = "Please select an appointment time";

  return newErrors;
};

export default validateForm;
