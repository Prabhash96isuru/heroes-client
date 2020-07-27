import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom"
import "bootstrap/dist/css/bootstrap.css"
import Hero from './Hero';
import heroes from "./heroes";
import NavBar from "./NavBar"


ReactDOM.render(
    <React.Fragment>
      <NavBar />
      <Route path= "/heroes" components= {heroes}/>
    </React.Fragment>,
    document.getElementById("root")
    );































/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/