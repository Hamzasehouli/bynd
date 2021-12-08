import React, { useRef, useContext, useMemo, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
import axios from "axios";
import { Appcontext } from "../store/Context";

const Login = function () {
  const history = useHistory();
  const [areCredentialsCorrect, setAreCredentialsCorrect] = useState(true);
  const ctx = useContext(Appcontext);
  const email = useRef();
  const password = useRef();
  document.title = "Login | bynd";

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (
      email.current.value.trim() === "" ||
      password.current.value.trim() === ""
    ) {
      setAreCredentialsCorrect(false);
      return;
    }
    try {
      const res = await axios({
        method: "post",
        url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBu__kxxOcq2wvUMelzlXijG7lDL7iBP8U`,
        data: {
          email: email.current.value,
          password: password.current.value,
        },
      });
      if (res.statusText === "OK") {
        document.cookie = `jwt=${res.data.idToken}; path=/`;
        ctx.setLoggedIn(true);
        setAreCredentialsCorrect(true);
        history.replace("/");
      }
    } catch (err) {
      setAreCredentialsCorrect(false);
      ctx.setLoggedIn(false);
    }
  };

  return (
    <section className={classes.section__form}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p
          style={{
            color: "red",
            display: !areCredentialsCorrect ? "block" : "none",
          }}
        >
          Credentials are incorrect
        </p>
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
