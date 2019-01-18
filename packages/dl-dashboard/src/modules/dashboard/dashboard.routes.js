import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Placeholder } from 'components/ui-blocks/placeholder';

const routes = [
  {
    path: '',
    component: Loadable({
      loader: () => import('modules/home/Home'),
      loading: Placeholder,
    }),
  },
  {
    path: 'blankPage',
    component: Loadable({
      loader: () => import('modules/blank/BlankPage'),
      loading: Placeholder,
    }),
  },
  {
    path: 'authCheck',
    component: Loadable({
      loader: () => import('modules/auth/AuthCheck'),
      loading: Placeholder,
    }),
  },
];

class DashboardRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map((route) => {
          const { path, exact, ...otherProps } = route;
          return (
            <Route
              exact={exact !== false}
              key={route.path}
              path={`${url}/${route.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default DashboardRouter;
