import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Login from "./components/Login/index";
import { Route, BrowserRouter as Router } from "react-router-dom";
// import ItemsList from './components/ItemsList';
// import ItemsList from './components/ItemDetail';

const routing = (
  <Router>
    <div>
      <Route path="/" component={Login} />
      <Route path="login" component={Login} />
      <Route path="logout" component={Login} />
      {/* <Route path="/itemsList" component={ItemsList} />
        <Route path="/itemDetail:/id" component={ItemDetail} /> */}
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
