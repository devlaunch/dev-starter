import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import ErrorBoundary from "modules/error/error-boundary";

const PrivateRouteComponent = ({
  component: Component,
  isAuthenticated,
  sessionHasBeenFetched,
  isAuthorized,
  hasAnyAuthorities = [],
  ...rest
}) => {
  const checkAuthorities = props =>
    isAuthorized ? (
      <ErrorBoundary>
        <Component {...props} />
      </ErrorBoundary>
    ) : (
      <div className="insufficient-authority">
        <div className="alert alert-danger">You are not authorized to access this page.</div>
      </div>
    );

  const renderRedirect = props => {
    if (!sessionHasBeenFetched) {
      return <div />;
    } else {
      return isAuthenticated ? (
        checkAuthorities(props)
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            search: props.location.search,
            state: { from: props.location }
          }}
        />
      );
    }
  };

  if (!Component) throw new Error(`A component needs to be specified for private route for path ${rest.path}`);

  return <Route {...rest} render={renderRedirect} />;
};

export const hasAnyAuthority = (authorities, hasAnyAuthorities) => {
  if (authorities && authorities.length !== 0) {
    if (hasAnyAuthorities.length === 0) {
      return true;
    }
    return hasAnyAuthorities.some(auth => authorities.includes(auth));
  }
  return false;
};

const mapStateToProps = (
  { authentication: { isAuthenticated, account, sessionHasBeenFetched } },
  { hasAnyAuthorities = [] }
) => ({
  isAuthenticated,
  isAuthorized: hasAnyAuthority(account.authorities, hasAnyAuthorities),
  sessionHasBeenFetched
});

state => ({});
/**
 * A route wrapped in an authentication check so that routing happens only when you are authenticated.
 * Accepts same props as React router Route.
 * The route also checks for authorization if hasAnyAuthorities is specified.
 */
export const PrivateRoute = connect(
  mapStateToProps,
  null,
  null,
  { pure: false }
)(PrivateRouteComponent);

export default PrivateRoute;
