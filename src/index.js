import React from 'react';
import ReactDOM from 'react-dom';

//import './style/index.css';
//import './style/App.css';
import './style/cover.css';
//import 'bootstrap/dist/css/bootstrap.min.css';

import * as serviceWorker from './serviceWorker';

import ReactMain from "./react/components/main";


const rootElem = document.body.querySelector('#root');
const reactMainElem = React.createElement(ReactMain, {});
ReactDOM.render(reactMainElem, rootElem);

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();