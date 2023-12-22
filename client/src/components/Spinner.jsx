import Spinner from "react-bootstrap/Spinner";

const MySpinner = () => {
  return (
    <Spinner
      as="span"
      animation="border"
      role="status"
      style={{ marginRight: "10%" }}
    />
  );
};

export default MySpinner;
