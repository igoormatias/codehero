import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "../components/header";
import HomePage from "../pages/home";
import CharDetails from "../pages/char-details";

const Routes = () => (
  <BrowserRouter>
    <Header />
    <Switch>
    </Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/chardetails/:characterid" exact component={CharDetails} />
  </BrowserRouter>
);

export default Routes;
