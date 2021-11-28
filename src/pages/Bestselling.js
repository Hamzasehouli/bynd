import CollectionsCmp from "../components/Collectionscmp";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
const Bestselling = function () {
  const ctx = useContext(Appcontext);
  document.title = "Best Selling Shoes | bynd";
  return (
    <CollectionsCmp
      data={ctx.data.filter((d) => d.collection === "bestselling")}
      headingPrimary="Best selling"
    ></CollectionsCmp>
  );
};

export default Bestselling;
