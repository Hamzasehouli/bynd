import CollectioncmpProducts from "./CollectioncmpMenu";
import classes from "./CollectioncmpProducts.module.css";
const CollectionsCmp = function (props) {
  return (
    <section>
      <div className={classes.header}>
        <h1 className={classes.headingPrimary}>{props.headingPrimary}</h1>
        <h2 className={classes.headingSecondary}>Check our collections</h2>
      </div>
      <div className={classes.collectionContainer}>
        <CollectioncmpMenu />
        <div className={classes.products}></div>
      </div>
    </section>
  );
};

export default CollectioncmpProducts;
