import { setData } from "../variables/storeCenterList";

// Storing only {center_id, center_name}
const createCenterList = (data) => {
  let selectedData = {};

  data.map((center) => {
    selectedData[center.center_id] = center.center_name;
  });

  setData(selectedData);
};

export default createCenterList;
