import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';

import { toggleCollapsed } from 'modules/dashboard/dashboard.reducers';
import TopbarUser from './topbarUser';
import TopbarWrapper from './topbar.style';

import themes from 'settings/themes';
import { themeConfig } from 'settings';

const { Header } = Layout;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      background: customizedTheme.backgroundColor,
      position: 'fixed',
      width: '100%',
      height: 70,
    };
    return (
      <TopbarWrapper>
        <Header style={styling} className={collapsed ? 'dlTopbar collapsed' : 'dlTopbar'}>
          <div className="dlLeft">
            <button
              className={collapsed ? 'triggerBtn menuCollapsed' : 'triggerBtn menuOpen'}
              style={{ color: customizedTheme.textColor }}
              onClick={toggleCollapsed}
            />
          </div>

          <ul className="dlRight">
            <li onClick={() => this.setState({ selectedItem: 'user' })} className="dlUser">
              <TopbarUser />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.Dashboard,
  }),
  { toggleCollapsed },
)(Topbar);
