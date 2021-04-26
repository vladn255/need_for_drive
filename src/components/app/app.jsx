import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import { RoutePath } from "../../const.js";

import MainScreen from "../main/main.jsx";
import NotFoundScreen from "../not-found/not-found.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={RoutePath.MAIN}>
          <MainScreen />
        </Route>

        <Route>
          <NotFoundScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
