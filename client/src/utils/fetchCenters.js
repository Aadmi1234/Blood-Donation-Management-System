const fetchCenters = async (API) => {
  try {
    const res = await API.get("/posts");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchCenters;
