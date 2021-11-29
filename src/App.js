import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Overview from "./pages/Overview";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>
      {window.location.pathname === "/" ? <Header /> : <Nav />}
      <main className="main">
        <Router>
          <Switch>
            <Route exact path="/">
              <Overview />
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
