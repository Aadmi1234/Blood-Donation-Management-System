import { API } from "../services/api";

export const postForm = async (form) => {
  try {
    const res = await API.post("/submitForm", form);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export const postAppId = async (app_id) => {
  try {
    const res = await API.post("/checkApp", app_id);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
