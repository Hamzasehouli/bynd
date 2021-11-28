import CollectionsCmp from "../components/Collectionscmp";
import { useContext } from "react";
import { Appcontext } from "../store/Context";
const Sneakers = function () {
  document.title = "Sneakers | bynd";
  const ctx = useContext(Appcontext);
  return (
    <CollectionsCmp
      data={ctx.data.filter((d) => d.collection === "sneakers")}
      headingPrimary="Sneakers"
    ></CollectionsCmp>
  );
};

export default Sneakers;
