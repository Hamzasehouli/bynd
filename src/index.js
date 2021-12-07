import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import Initcontext from "./store/Context";

ReactDOM.render(
  // <React.StrictMode>
  <Initcontext>
    <App />
  </Initcontext>,
  // </React.StrictMode>,
  document.getElementById("root")
);
