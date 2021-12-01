import Sample from "../layout/Sample";
import Learn from "../layout/Learn";
import classes from "./Overview.module.css";

const Overview = function () {
  document.title = "Home | bynd";

  return (
    <>
      <Sample />
      <Learn />
    </>
  );
};

export default Overview;
