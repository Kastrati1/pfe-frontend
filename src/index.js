import React from "react";
import ReactDOM from "react-dom";
import "./style/cover.css";
import ReactMain from "./react/components/main";

require("dotenv").config();
//process.env.NODE_ENV == development
console.log("process var " , process.env);
console.log("process var test " ,process.env.test);
console.log("process var test " ,process.env["test"]);

const rootElem = document.body.querySelector("#root");
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem);
