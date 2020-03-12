import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import Login from "./components/Login/index";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { store } from "./_helpers";
import "./index.css";
// import ItemsList from './components/ItemsList';
// import ItemsList from './components/ItemDetail';

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/" component={Login} />
        <Route path="login" component={Login} />
        <Route path="logout" component={Login} />
        {/* <Route path="/itemsList" component={ItemsList} />
        <Route path="/itemDetail:/id" component={ItemDetail} /> */}
      </div>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
