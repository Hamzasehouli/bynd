import CollectioncmpMenu from "./CollectioncmpMenu";
import classes from "./CollectionsCmp.module.css";
const CollectionsCmp = function (props) {
  return (
    <section className={classes.section}>
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

export default CollectionsCmp;
