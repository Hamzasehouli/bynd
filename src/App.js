import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Collection from "./pages/Collection";
import Sneakers from "./pages/Sneakers";
import Wandern from "./pages/Wandern";
import Profile from "./pages/Profile";
import Allproducts from "./pages/Allproducts";
import Cart from "./pages/Cart";
import Forgetpassword from "./pages/Forgetpassword";
import Nav from "./components/Nav";
import React, { useEffect, useContext, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import { Appcontext } from "./store/Context";
import Bestselling from "./pages/Bestselling";
import ProductShow from "./components/ProductShow";

function App() {
  const [pathname, setPathname] = useState();
  const ctx = useContext(Appcontext);
  useEffect(() => {
    setPathname(window.location.pathname);
  });

  useEffect(() => {
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBu__kxxOcq2wvUMelzlXijG7lDL7iBP8U",
      {
        method: "POST",
        header: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ idToken: document.cookie.split("=")[1] }),
      }
    )
      .then((res) => {
        if (res.ok) {
          ctx.setLoggedIn(true);
        } else {
          console.log(res);
          ctx.setLoggedIn(false);
        }
        return res.json();
      })
      .then((data) => {
        const { users } = data;
        console.log(users);
        if (!users) return;
        ctx.setUser(users[0]);
      });
  }, []);

  return (
    <>
      <main className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <Overview />
            </Route>
            <Route path="/account/login">
              <Nav />
              <Login />
            </Route>
            <Route path="/account/signup">
              <Nav />
              <Signup />
            </Route>
            <Route exact path="/collections">
              <Redirect to="/collections/all"></Redirect>
            </Route>
            <Route path="/collections/all">
              <Nav />
              <Allproducts />
            </Route>
            <Route path="/collections/best-selling">
              <Nav />
              <Bestselling />
            </Route>
            <Route path="/collections/sneakers">
              <Nav />
              <Sneakers />
            </Route>
            <Route path="/collections/wandern">
              <Nav />
              <Wandern />
            </Route>
            <Route path="/account/reset-password">
              <Nav />
              <Forgetpassword />
            </Route>
            <Route path="/cart">
              <Nav />
              <Cart />
            </Route>
            <Route path="/profile">
              <Nav />
              <Profile />
            </Route>

            <Route path="/account/*">
              <Redirect to="/profile"></Redirect>
            </Route>
            {/* <Route exact path="/signup">
              {isLoggedin ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route path="/login">
              {isLoggedin ? <Redirect to="/" /> : <Login />}
            </Route> */}
            <Route path="/profile">
              <p>profile</p>
            </Route>
            <Route path="/account/:login">
              <Login></Login>
            </Route>
            <Route path="/product/:productId">
              <Nav />
              <ProductShow></ProductShow>
            </Route>
            <Route path="*">
              <p>errro</p>
            </Route>
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;
