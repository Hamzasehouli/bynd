import classes from "./CollectioncmpMenu.module.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
const CollectioncmpMenu = function () {
  const location = useLocation();

  const [params, setParam] = useState();
  console.log(location.pathname.split("/")[2]);

  useEffect(() => {
    setParam(location.pathname.split("/")[2]);
  });
  return (
    <ul className={classes.CollectionMenuList}>
      <h3>Collections</h3>
      <li className={classes.CollectionMenuItem}>
        <Link
          className={
            (classes.CollectionMenuAnch, params === "all" ? "active" : "")
          }
          to="/collections/all"
        >
          all
        </Link>
      </li>
      <li className={classes.CollectionMenuItem}>
        <Link
          className={
            (classes.CollectionMenuAnch,
            params === "best-selling" ? "active" : "")
          }
          to="/collections/best-selling"
        >
          Best selling
        </Link>
      </li>
      <li className={classes.CollectionMenuItem}>
        <Link
          className={
            (classes.CollectionMenuAnch, params === "sneakers" ? "active" : "")
          }
          to="/collections/sneakers"
        >
          sneakers
        </Link>
      </li>
      <li className={classes.CollectionMenuItem}>
        <Link
          className={
            (classes.CollectionMenuAnch, params === "wandern" ? "active" : "")
          }
          to="/collections/wandern"
        >
          wandern
        </Link>
      </li>
    </ul>
  );
};

export default CollectioncmpMenu;
