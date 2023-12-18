export const calcAge = (dateString) => {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dateDiff = today.getDate() - birthDate.getDate();

  if (monthDiff < 0 || (monthDiff == 0 && dateDiff < 0)) age--;

  return age;
};

export const calcDOD = (dateString) => {
  const today = new Date();
  const donationDate = new Date(dateString);

  const dateDiff = donationDate.getDate() - today.getDate();

  return dateDiff;
};

export const isValidEmail = (mail) => {
  const validity = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);

  return validity;
};

export const isValidPhone = (phone) => {
  const validity = /^\d{10}$/.test(phone);

  return validity;
};

export const validateAppId = (app_id) => {
  let validity = true;
  let errorMsg = "";

  if (!app_id || app_id === "") {
    validity = false;
    errorMsg = "Please enter your application id.";
  } else if (app_id.length !== 10) {
    validity = false;
    errorMsg = "Please enter a valid 10-dig application id.";
  }

  return [validity, errorMsg];
};
