import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      localStorage.getItem("user")
      ? <Layout>
        <Component {...props} />
      </Layout>
      : <Redirect to={{ pathname: "/login", state: { from: props.location }}} />
    )}
  />
);

export default LayoutRoute;
