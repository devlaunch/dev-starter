import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Route, Switch } from 'react-router-dom';
import { Provider } from 'rebass';

import { store } from 'store/store';
import { loadApp, redirect } from 'modules/common';
import { theme, baseStyles } from 'modules/theme';

import Header from 'components/Header';

// import Article from '../Article';
// import Editor from '../Editor';
import Home from '../Home';
// import Login from '../Login';
// import Profile from '../Profile';
// import ProfileFavorites from '../Profile/ProfileFavorites';
// import Register from '../Register';
// import Settings from '../Settings';

class App extends React.Component {
  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    console.log(token);
    this.props.loadApp(token);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.redirect();
    }
  }

  render() {
    baseStyles();
    if (this.props.appLoaded) {
      return (
        <Provider theme={theme}>
          <Header appName={this.props.appName} currentUser={this.props.currentUser} />
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/editor/:slug" component={Editor} />
            <Route path="/editor" component={Editor} />
            <Route path="/article/:id" component={Article} />
            <Route path="/settings" component={Settings} />
            <Route path="/@:username/favorites" component={ProfileFavorites} />
            <Route path="/@:username" component={Profile} /> */}
          </Switch>
        </Provider>
      );
    }
    return (
      <Provider theme={theme}>
        <Header appName={this.props.appName} currentUser={this.props.currentUser} />{' '}
      </Provider>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

const mapStateToProps = state => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
});

// const mapDispatchToProps = dispatch => ({
//   onLoad: (token) => {
//     console.log('onload:', token);
//     dispatch(loadApp(token));
//   },
//   onRedirect: () => dispatch(redirect()),
// });

const mapDispatchToProps = {
  loadApp,
  redirect,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
