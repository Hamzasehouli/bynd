import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
const Login = function () {
  document.title = "Login | bynd";
  const handleSubmit = function (e) {
    e.preventDefault();
    console.log("jjjjj");
  };
  return (
    <section className={classes.section__form}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={classes.form__control}>
          <label className={classes.form__label}>Email</label>
          <input type="email" className={classes.form__input}></input>
        </div>
        <div className={classes.form__control}>
          <label className={classes.form__label}>Password</label>
          <input type="password" className={classes.form__input}></input>
        </div>
        <Button styl="outline" type="submit">
          Login
        </Button>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/account/signup">Create account</Link>
          <Link to="/account/reset-password">Forget password?</Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
