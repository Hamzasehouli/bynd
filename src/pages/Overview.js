import Sample from "../layout/Sample";
import Learn from "../layout/Learn";

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
