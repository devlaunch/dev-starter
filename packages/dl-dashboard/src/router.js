import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { connect } from 'react-redux';
import Loadable from 'react-loadable';

import Dashboard from 'modules/dashboard/Dashboard';
import PublicRoute from 'helpers/routes/public-routes';
import { Placeholder } from 'components/ui-blocks/placeholder';

const RestrictedRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

const routes = [
  {
    path: '/',
    component: Loadable({
      loader: () => import('modules/signin/Signin'),
      loading: Placeholder,
    }),
  },
  {
    path: '/signin',
    component: Loadable({
      loader: () => import('modules/signin/Signin'),
      loading: Placeholder,
    }),
  },
];

const Router = ({ history, isLoggedIn }) => (
  <ConnectedRouter history={history}>
    <div>
      {routes.map((route) => {
        const { path, exact, ...otherProps } = route;
        return (
          <PublicRoute exact={exact !== false} key={route.path} path={route.path} {...otherProps} />
        );
      })}
      <RestrictedRoute path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn} />
    </div>
  </ConnectedRouter>
);

export default connect(state => ({
  isLoggedIn: state.Auth.idToken !== null,
}))(Router);
