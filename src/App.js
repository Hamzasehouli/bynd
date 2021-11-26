import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Overview from "./pages/Overview";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Nav from "./components/Nav";
import React, { useEffect, useContext, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import { Appcontext } from "./store/Context";

function App() {
  const [pathname, setPathname] = useState();
  useEffect(() => {
    setPathname(window.location.pathname);
  });

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
            {/* <Route exact path="/signup">
              {isLoggedin ? <Redirect to="/" /> : <Signup />}
            </Route>
            <Route path="/login">
              {isLoggedin ? <Redirect to="/" /> : <Login />}
            </Route> */}
            <Route path="/profile">
              <p>profile</p>
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
