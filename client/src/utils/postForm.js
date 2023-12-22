import { API } from "../services/api";

const postForm = async (form) => {
  // try {
  //   const res = await API.post("/submitForm", form);
  //   return res;
  // } catch (error) {
  //   throw new Error(error);
  // }
  await API.post("/submitForm", form)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

export default postForm;
