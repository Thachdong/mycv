import React from "react";
import { Route, Redirect } from "react-router-dom";

export default ({ component: Component, auth, isPrivate, ...rest }) => {
  if (isPrivate) {
    return auth ? (
      <Route {...rest} render={() => <Component />} />
    ) : (
      <Redirect to="/login" />
    );
  } else {
    return <Route {...rest} render={() => <Component />} />;
  }
};
