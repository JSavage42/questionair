import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../components/Header';

const PublicRoute = ({ component: Component, ...rest }) => (
  <React.Fragment>
    <Route
      {...rest}
      component={props => (
        <React.Fragment>
          <Header/>
          <Component {...props} />
        </React.Fragment>
      )}
    />
  </React.Fragment>
);

export default PublicRoute;
