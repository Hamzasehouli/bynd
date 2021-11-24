import classes from "./Sample.module.css";
const Sample = function () {
  return (
    <>
      <h2>
        We make your shoes more sustainable and{" "}
        <span className={classes.wave}>environement friendly</span> and made
        with clean
        <span className={classes.wave}>ingredients.</span>
      </h2>
    </>
  );
};

export default Sample;
