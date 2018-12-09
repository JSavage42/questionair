import React from 'react';
import { Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, ...rest }) => (
  <React.Fragment>
    <Route
      {...rest}
      component={props => (
        <React.Fragment>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  </React.Fragment>
);

export default PublicRoute;
