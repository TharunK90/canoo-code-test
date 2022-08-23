import * as React from "react";
import { render } from "react-dom";
import Router from "./Routes";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);
