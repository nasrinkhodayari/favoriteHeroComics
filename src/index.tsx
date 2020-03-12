import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { store } from "./_helpers";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

const Login = React.lazy(() => import("./components/Login/index"));
const ItemsList = React.lazy(() => import("./components/ItemsList/index"));

const routing = (
  <Provider store={store}>
    <Router>
      <Suspense fallback={""}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/list" component={ItemsList} />
        </Switch>
      </Suspense>
    </Router>
    <ToastContainer />
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
