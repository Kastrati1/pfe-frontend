import React from "react";
import ReactDOM from "react-dom";
require("dotenv").config();
import "./style/cover.css";

import ReactMain from "./react/components/main";

const rootElem = document.body.querySelector("#root");
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem);

//ReactDOM.render(<App />, document.getElementById('root'));
