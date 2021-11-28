import classes from "./Profile.module.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CollectioncmpMenu from "../components/CollectioncmpMenu";
import Cart from "./Cart.js";
const Profile = function () {
  document.title = "hamza Sehouli | bynd";
  return (
    <section className={classes.sectionProfile}>
      <Router>
        <ul className={classes.profileMenuList}>
          <li className={classes.profileMenuItem}>
            <Link
              className={(classes.profileMenuLink, "active")}
              to="/account/mycart"
            >
              My cart
            </Link>
          </li>
          <li className={classes.profileMenuItem}>
            <Link className={classes.profileMenuLink} to="/account/orders">
              My orders
            </Link>
          </li>
          <li className={classes.profileMenuItem}>
            <Link className={classes.profileMenuLink} to="/account/details">
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
