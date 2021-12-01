import CollectionsCmp from "../components/Collectionscmp";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
const Allproducts = function () {
  const ctx = useContext(Appcontext);
  document.title = "All shoes | bynd";
  return (
    <CollectionsCmp
      data={ctx.data}
      headingPrimary="All products"
    ></CollectionsCmp>
  );
};

export default Allproducts;
