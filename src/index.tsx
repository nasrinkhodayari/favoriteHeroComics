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
const ItemsDetail = React.lazy(() => import("./components/ItemsDetail/index"));

const routing = (
  <Provider store={store}>
    <Router>
      <Suspense fallback={""}>
        <Switch>
          <Route path="/" component={Login} />
          <Route path="login" component={Login} />
          <Route path="logout" component={Login} />
          <Route path="/itemsList" component={ItemsList} />
          <Route path="/itemDetail:/id" component={ItemsDetail} />
        </Switch>
      </Suspense>
    </Router>
    <ToastContainer />
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));
