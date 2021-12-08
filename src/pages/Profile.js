import classes from "./Profile.module.css";
import {
  BrowserRouter as Router,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { useMemo, useEffect, useState, useContext, useRef } from "react";
import { useLocation } from "react-router-dom";
import Baseitem from "../components/Baseitem";
import Button from "../components/Button";
import CollectioncmpMenu from "../components/CollectioncmpMenu";
import Cart from "./Cart.js";
import { Appcontext } from "../store/Context";

const Profile = function () {
  const [path, setPath] = useState();
  const [user, setUser] = useState();
  const email = useRef();
  const location = useLocation();
  const history = useHistory();

  const ctx = useContext(Appcontext);
  document.title = "hamza Sehouli | bynd";

  useEffect(() => {
    setUser(ctx.user);
  }, []);

  const updateEmail = async function (e) {
    e.preventDefault();

    console.log(document.cookie.split("=")[1]);
    const res = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBu__kxxOcq2wvUMelzlXijG7lDL7iBP8U",
      {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          idToken: document.cookie.split("=")[1],
          email: email.current.value,
        }),
      }
    );
    console.log(res);
    const data = await res.json();
    console.log(data);
    if (res.ok) {
      document.cookie = `jwt=${data.idToken}; path=/`;
      email.current.value = "";
      setTimeout(() => {
        history.replace("/");
      }, 2000);
    }
  };

  return (
    <section className={classes.sectionProfile}>
      <Router>
        <ul className={classes.profileMenuList}>
          <li className={classes.profileMenuItem}>
            <Link
              onClick={() => {
                setPath("/account/mycart");
              }}
              className={
                (classes.profileMenuLink,
                path === "/account/mycart" ? "active" : "")
              }
              to="/account/mycart"
            >
              My cart
            </Link>
          </li>
          <li className={classes.profileMenuItem}>
            <Link
              onClick={() => setPath("/account/orders")}
              className={
                (classes.profileMenuLink,
                path === "/account/orders" ? "active" : "")
              }
              to="/account/orders"
            >
              My orders
            </Link>
          </li>
          <li className={classes.profileMenuItem}>
            <Link
              onClick={() => setPath("/account/details")}
              className={
                (classes.profileMenuLink,
                path === "/account/details" ? "active" : "")
              }
              to="/account/details"
            >
              My info
            </Link>
          </li>
        </ul>
        <div className={classes.profileRender}>
          <Route path="/account/mycart">
            <h2>My cart</h2>
            <Cart status="profile"></Cart>
          </Route>
          <Route path="/account/orders">
            <h2>Orders</h2>
            <ul style={{ width: "90%" }}>
              <Baseitem status="profile"></Baseitem>
            </ul>
          </Route>
          <Route path="/account/details">
            <h2>Details</h2>
            <form className={classes.form} onSubmit={updateEmail}>
              <h2>Update email</h2>
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
                  placeholder={user?.email}
                  type="email"
                  className={classes.form__input}
                  ref={email}
                ></input>
              </div>
              {/* <div className={classes.form__control}>
                <label className={classes.form__label}>Password</label>
                <input type="password" className={classes.form__input}></input>
              </div> */}
              <Button styl="outline" type="submit">
                Save
              </Button>
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* <Link to="/">Back</Link> */}
              </div>
            </form>
          </Route>
        </div>
      </Router>
    </section>
  );
};

export default Profile;
