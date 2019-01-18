import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Popover } from 'components/ui-elements/data-display/popover';
import IntlMessages from 'components/utility/intlMessages';
import userpic from 'image/user1.png';

import authAction from 'redux/auth/actions';
import TopbarDropdownWrapper from './topbarDropdown.style';

const { logout } = authAction;

class TopbarUser extends Component {
  constructor(props) {
    super(props);
    this.handleVisibleChange = this.handleVisibleChange.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {
      visible: false,
    };
  }
  hide() {
    this.setState({ visible: false });
  }
  handleVisibleChange() {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const content = (
      <TopbarDropdownWrapper className="dlUserDropdown">
        <a className="dlDropdownLink" href="# ">
          <IntlMessages id="themeSwitcher.settings" />
        </a>
        <a className="dlDropdownLink" href="# ">
          <IntlMessages id="sidebar.feedback" />
        </a>
        <a className="dlDropdownLink" href="# ">
          <IntlMessages id="topbar.help" />
        </a>
        <a className="dlDropdownLink" onClick={this.props.logout} href="# ">
          <IntlMessages id="topbar.logout" />
        </a>
      </TopbarDropdownWrapper>
    );

    return (
      <Popover
        content={content}
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        arrowPointAtCenter
        placement="bottomLeft"
      >
        <div className="dlImgWrapper">
          <img alt="user" src={userpic} />
          <span className="userActivity online" />
        </div>
      </Popover>
    );
  }
}
export default connect(
  null,
  { logout },
)(TopbarUser);
