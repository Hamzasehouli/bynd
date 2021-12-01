import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
import axios from "axios";

const Login = function () {
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  document.title = "Login | bynd";
  const handleSubmit = async function (e) {
    e.preventDefault();
    const res = await axios({
      method: "post",
      url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDI2GAM3DWHI8s6vmRr7rufuuEVDoG3ODA`,
      data: {
        email: email.current.value,
        password: password.current.value,
      },
    });
    if (res.statusText === "OK") {
      document.cookie = `jwt=${res.data.idToken}`;
      history.replace("/");
    }
  };
  return (
    <section className={classes.section__form}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className={classes.form__control}>
          <label className={classes.form__label}>Email</label>
          <input
            ref={email}
            type="email"
            className={classes.form__input}
          ></input>
        </div>
        <div className={classes.form__control}>
          <label className={classes.form__label}>Password</label>
          <input
            ref={password}
            type="password"
            className={classes.form__input}
          ></input>
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
