import CollectionsCmp from "../components/Collectionscmp";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
const Wandern = function () {
  document.title = "Wandern | bynd";
  const ctx = useContext(Appcontext);
  return (
    <CollectionsCmp
      data={ctx.data.filter((d) => d.collection === "wandern")}
      headingPrimary="Wandern"
    ></CollectionsCmp>
  );
};

export default Wandern;
