import React, { useState, useRef } from "react";

import { useHistory } from "react-router-dom";
import Button from "../components/Button";
import classes from "./Form.module.css";
const Forgetpassword = function () {
  const history = useHistory();
  document.title = "Reset password | bynd";
  const [isEmailSent, setIsEmailSent] = useState("notYet");
  const email = useRef();
  const replacePage = function () {
    setTimeout(() => {
      history.replace("/");
    }, 2000);
    return "Email sent successffully";
  };

  const handleSubmit = async function (e) {
    e.preventDefault();
    if (!email.current.value.trim()) {
      setIsEmailSent("emailCouldNotBeSent");
      return;
    }
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyBu__kxxOcq2wvUMelzlXijG7lDL7iBP8U",
      {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          requestType: "PASSWORD_RESET",
          email: "cedilaj898@shirulo.com",
        }),
      }
    );
    // console.log(res);
    // const data = await res.json();
    // console.log(data);
    if (res.ok) {
      setIsEmailSent("emailCouldBeSent");
    } else {
      setIsEmailSent("emailCouldNotBeSent");
    }
  };
  return (
    <section className={classes.section__form}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <p>
          {isEmailSent === "emailCouldNotBeSent"
            ? "Email could not been sent"
            : isEmailSent === "emailCouldBeSent"
            ? replacePage()
            : ""}
        </p>
        <h2>Reset your password</h2>

        {/* <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Link to="/account/signup">Create account</Link>
          <Link to="/account/signup">Forget password?</Link>
        </div> */}
        <div className={classes.form__control}>
          <label className={classes.form__label}>Email</label>
          <input
            ref={email}
            type="email"
            className={classes.form__input}
          ></input>
        </div>
        <Button styl="outline" type="submit">
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Forgetpassword;
