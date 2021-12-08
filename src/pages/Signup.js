import React, { useRef, useContext, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
import { useHistory } from "react-router-dom";
// import axios from "axios";

import { Appcontext } from "../store/Context";

const Signup = function () {
  const ctx = useContext(Appcontext);
  const [areCredentialsCorrect, setAreCredentialsCorrect] = useState(true);
  const history = useHistory();
  document.title = "Register | bynd";
  const email = useRef(null);
  const password = useRef(null);
  const handleSubmit = async function (e) {
    e.preventDefault();

    // axios({
    //   method: "post",
    //   url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDI2GAM3DWHI8s6vmRr7rufuuEVDoG3ODA`,
    //   data: {
    //     email: emailRef.current,
    //     password: passwordRef.current,
    //   },
    // });
    try {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBu__kxxOcq2wvUMelzlXijG7lDL7iBP8U",
        {
          method: "POST",
          header: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        document.cookie = `jwt=${data.idToken}; path=/`;
        email.current.value = "";
        password.current.value = "";
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
          "Credentials are incorrect"
        </p>
        <h2>Create account</h2>
        {/* <div className={classes.form__control}>
          <label className={classes.form__label}>First name</label>
          <input type="email" className={classes.form__input}></input>
        </div>
        <div className={classes.form__control}>
          <label className={classes.form__label}>Last name</label>
          <input type="email" className={classes.form__input}></input>
        </div> */}
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
          Create
        </Button>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/">Return to store</Link>
          <Link to="/account/login">Login instead</Link>
        </div>
      </form>
    </section>
  );
};

export default Signup;
