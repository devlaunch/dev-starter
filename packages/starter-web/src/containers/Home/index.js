import React from 'react';
import { connect } from 'react-redux';

// import { unloadHomePage, loadHomePage } from 'modules/home';

import { Container } from 'rebass';

import Hero from './sections/Hero';
// import MainView from './MainView';
// import Tags from './Tags';

class Home extends React.Component {
  componentWillMount() {
    // this.props.onLoad(this.props.token);
  }

  componentWillUnmount() {
    // this.props.onUnload();
  }

  render() {
    return (
      <Container>
        <Hero token={this.props.token} appName={this.props.appName} />
        {/* <MainView />
        <Tags tags={this.props.tags} /> */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state.home,
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = dispatch => ({
  // onClickTag: (tag, pager, payload) =>
  //   dispatch({
  //     type: APPLY_TAG_FILTER,
  //     tag,
  //     pager,
  //     payload,
  //   }),
  // onLoad: token => dispatch(loadHomePage(token)),
  // onUnload: () => dispatch(unloadHomePage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
