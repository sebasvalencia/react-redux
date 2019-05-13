import React from "react";
import { render } from "react-dom";

import css from "./styles/style.styl";

import Main from "./components/Main";

// render(<p>Hi</p>, document.getElementById("root"));
render(<Main />, document.getElementById("root"));
