import classes from "./Header.module.css";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { useContext } from "react";
import { Appcontext } from "../store/Context";

const Header = function () {
  const ctx = useContext(Appcontext);

  return (
    <header className={classes.header}>
      <Nav />
      <div className="container">
        <figure className={classes.hero__container}>
          <div className={classes.hero}>
            <h1
              style={{
                fontSize: 7 + "rem",
                width: 60 + "%",
                marginBottom: 2 + "rem",
                fontWeight: 700,
                lineHeight: 90 + "%",
              }}
            >
              Bynd shoes and run.
            </h1>
            <h2
              style={{
                fontSize: 3 + "rem",
                width: 60 + "%",
                marginBottom: 2 + "rem",
                fontWeight: 700,
                lineHeight: 110 + "%",
              }}
            >
              Our shoes are made of recycable materials.
            </h2>
            <Button styl="main" type="button">
              Shop now
            </Button>
          </div>
        </figure>
      </div>
    </header>
  );
};

export default Header;
