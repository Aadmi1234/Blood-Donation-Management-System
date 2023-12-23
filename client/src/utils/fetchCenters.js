import { API } from "../services/api";

const fetchCenters = async () => {
  try {
    const res = await API.get("/getCenters");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchCenters;
