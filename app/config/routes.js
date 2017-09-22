import React from "react";
import { Route, IndexRoute, Router, browserHistory } from "react-router";
import Main from "../components/Main";
import Saved from "../components/Saved";
import Search from "../components/Search";

// Export the Routes
const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    <Route path="search" component={Search} />
    <Route path="saved" component={Saved} />
    <IndexRoute component={Search} />
    </Route>
  </Router>
);

export default routes;
