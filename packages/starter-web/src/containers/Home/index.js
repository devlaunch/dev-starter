import React from "react";
import { connect } from "react-redux";
import { Container } from "rebass";

import { unloadHomePage, loadHomePage } from "modules/home";
import { loadTags, applyTagFilter } from "modules/articles/tags";
import Hero from "./sections/Hero";
// import GlobalArticleFeed from './sections/GlobalArticleFeed';
// import MainView from './MainView';
import Tags from "./sections/Tags";

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(this.props.token);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <Container>
        <Hero token={this.props.token} appName={this.props.appName} />
        {/* <GlobalArticleFeed tab={props.tab} onTabClick={props.onTabClick} />
        <MainView /> */}
        <Tags tags={this.props.tags} onTagClick={this.props.onClickTag} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state.home,
  ...state.articleList,
  appName: state.common.appName,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  onClickTag: tag => dispatch(applyTagFilter(tag)),
  onLoad: () => dispatch(loadTags()),
  onUnload: () => dispatch(unloadHomePage())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
