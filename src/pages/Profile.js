import classes from "./Profile.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Baseitem from "../components/Baseitem";
import CollectioncmpMenu from "../components/CollectioncmpMenu";
import Cart from "./Cart.js";
const Profile = function () {
  const location = useLocation();
  document.title = "hamza Sehouli | bynd";

  const [path, setPath] = useState();

  return (
    <section className={classes.sectionProfile}>
      <Router>
        <ul className={classes.profileMenuList}>
          <li className={classes.profileMenuItem}>
            <Link
              onClick={() => {
                setPath("/account/mycart");
                console.log("kkkkkkkk");
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
          </Route>
        </div>
      </Router>
    </section>
  );
};

export default Profile;
