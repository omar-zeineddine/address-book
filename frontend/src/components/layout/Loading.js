import spinner from "./loading.gif";

const Spinner = () => (
  <img
    src={spinner}
    style={{ width: "200px", margin: "auto", display: "block" }}
    alt="Loading..."
  />
);

export default Spinner;
