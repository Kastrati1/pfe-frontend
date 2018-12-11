import React from "react";
import ReactDOM from "react-dom";
import "./style/cover.css";
import ReactMain from "./react/components/main";

require("dotenv").config();

const rootElem = document.body.querySelector("#root");
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem);

//ReactDOM.render(<App />, document.getElementById('root'));
