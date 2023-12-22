const fetchCenters = async (API) => {
  try {
    const res = await API.get("/getCenters");
    return res;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchCenters;
