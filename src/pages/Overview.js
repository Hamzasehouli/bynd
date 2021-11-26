import { useContext } from "react";
import Sample from "../layout/Sample";
import Learn from "../layout/Learn";
import { Appcontext } from "../store/Context";

const Overview = function () {
  const ctx = useContext(Appcontext);

  console.log(ctx.name);
  return (
    <>
      <Sample />
      <Learn />
    </>
  );
};

export default Overview;
