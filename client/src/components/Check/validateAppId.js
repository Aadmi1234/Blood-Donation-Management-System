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
