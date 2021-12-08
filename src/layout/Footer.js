import classes from "./Footer.module.css";
import sprite from "../sprite.svg";
const Footer = function () {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerLogo}>
        {/* <img alt="" src=""></img> */}
        <p
          style={{
            fontSize: 5 + "rem",
            fontWeight: 700,
            lineHeight: 70 + "%",
          }}
        >
          bynd
        </p>
      </div>
      <ul className={classes.footerList}>
        <li className={classes.footerItem}>
          <h2>Shop</h2>
          <ul className={classes.footerItemList}>
            <li className={classes.footerListItemItem}>All products</li>
            <li className={classes.footerListItemItem}>Sneakers</li>
            <li className={classes.footerListItemItem}>Boots</li>
            <li className={classes.footerListItemItem}>Luxury</li>
          </ul>
        </li>
        <li className={classes.footerItem}>
          <h2>About</h2>
          <ul className={classes.footerItemList}>
            <li className={classes.footerListItemItem}>All products</li>
            <li className={classes.footerListItemItem}>Sneakers</li>
            <li className={classes.footerListItemItem}>Boots</li>
            <li className={classes.footerListItemItem}>Luxury</li>
          </ul>
        </li>

        <li className={classes.footerItem}>
          <h2>Contact us</h2>
          <ul className={classes.footerItemList}>
            <li className={classes.footerListItemItem}>Help</li>
            <li className={classes.footerListItemItem}>Email us</li>
          </ul>
        </li>
        <li className={classes.footerItem}>
          <h2>Follow us</h2>
          <ul className={classes.footerItemSocialLinksList}>
            <li className={classes.footerItemSocialLinksItem}>
              <a href="/#" className={classes.footerItemSocialLinksItemLink}>
                <svg className={classes.soc}>
                  <use href={"../" + sprite + "#icon-facebook"}></use>
                </svg>
              </a>
            </li>
            <li className={classes.footerItemSocialLinksItemLink}>
              <a href="/#" className={classes.footerItemSocialLinksItemLink}>
                <svg className={classes.soc}>
                  <use href={"../" + sprite + "#icon-instagram"}></use>
                </svg>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className={classes.copy}>Copyright © 2021, bynd.</p>
      <p className={classes.copy}>
        Made by{" "}
        <a rel="noreferrer" target="_blank" href="https://hamzasehouli.ma">
          Hamza Sehouli
        </a>
      </p>
      <ul className={classes.payList}>
        <li className={classes.payListItem}>
          <svg className={classes.svg}>
            <use href={"../" + sprite + "#icon-mastercard"}></use>
          </svg>
        </li>
        <li className={classes.payListItem}>
          <svg className={classes.svg}>
            <use href={"../" + sprite + "#icon-visa"}></use>
          </svg>
        </li>
        <li className={classes.payListItem}>
          <svg className={classes.svg}>
            <use href={"../" + sprite + "#icon-paypal"}></use>
          </svg>
        </li>
        <li className={classes.payListItem}>
          <svg className={classes.svg}>
            <use href={"../" + sprite + "#icon-stripe"}></use>
          </svg>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
