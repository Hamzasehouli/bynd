import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
const Forgetpassword = function () {
  document.title = "Reset password | bynd";
  const handleSubmit = function (e) {
    e.preventDefault();
  };
  return (
    <section className={classes.section__form}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2>Reset your password</h2>

        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/account/signup">Create account</Link>
          <Link to="/account/signup">Forget password?</Link>
        </div> */}
        <div className={classes.form__control}>
          <label className={classes.form__label}>Email</label>
          <input type="email" className={classes.form__input}></input>
        </div>
        <Button styl="outline" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Forgetpassword;
