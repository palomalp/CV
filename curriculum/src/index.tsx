import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import PermanentDrawerLeft from "./vistas/infoGeneral";

ReactDOM.render(
  <div>
    <App />
    <PermanentDrawerLeft/>
  </div>,
  document.getElementById("root")
);
