import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./pages/login"
import MainPage from "./pages/mainPage"
import ThirdStep from "./pages/thirdStep"

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/third">
            <ThirdStep />
          </Route>
        </Switch>
    </Router>
  );
}
