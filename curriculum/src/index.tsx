import React from "react";
import ReactDOM from "react-dom";
import {App} from "./app";
import VerticalTabs from "./componentes/formatoPag"
// import PermanentDrawerLeft from "./componentes/formatoPag";

ReactDOM.render(
  <div>
    <App />
    <VerticalTabs/>
  </div>,
  document.getElementById("root")
);
