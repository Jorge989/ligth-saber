import React from "react";
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Planetas from "./pages/Planetas";
import Personagens from "./pages/Personagens";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/planetas" component={Planetas} />
        <Route path="/personagens" component={Personagens} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
