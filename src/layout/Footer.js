import classes from "./Footer.module.css";
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
                facebook
              </a>
            </li>
            <li className={classes.footerItemSocialLinksItemLink}>Instagram</li>
          </ul>
        </li>
      </ul>
      <p className={classes.copy}>Copyright © 2021, bynd.</p>
      <ul className={classes.payList}>
        <li className={classes.payListItem}>visa</li>
        <li className={classes.payListItem}>visa</li>
        <li className={classes.payListItem}>visa</li>
        <li className={classes.payListItem}>visa</li>
      </ul>
    </footer>
  );
};

export default Footer;
