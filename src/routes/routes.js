import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/header";
import HomePage from "../pages/home";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" exact component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
