import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Route from "./RoutesConfig";
import CV from "./components/pages/CV";
import Login from "./components/pages/Login";
import AdminContainer from "./containers/AdminContainer";

const App = ({ auth }) => (
  <Router>
    <Switch>
      <Route path="/" exact component={CV} />
      <Route path="/login" component={Login} />
      <Route
        path="/admin"
        component={AdminContainer}
        isPrivate={true}
        auth={auth.auth}
      />
    </Switch>
  </Router>
);

export default connect(({ auth }) => ({ auth }))(App);
