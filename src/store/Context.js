import React, { createContext, useState } from "react";

export const Appcontext = createContext({
  name: "default",
  age: "defaul",
  job: "default",
  pathname: "",
  setName: () => {},
  setAge: () => {},
  setJob: () => {},
  setPathname: () => {},
});

const Initcontext = function (props) {
  const [name, setName] = useState("hamza");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [pathname, setPathname] = useState("");
  const ctx = {
    name,
    age,
    job,
    setName,
    setAge,
    setJob,
    pathname,
  };
  return (
    <Appcontext.Provider value={ctx}>{props.children}</Appcontext.Provider>
  );
};

export default Initcontext;
