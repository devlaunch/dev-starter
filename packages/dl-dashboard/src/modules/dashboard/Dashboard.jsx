import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import { Debounce } from "react-throttle";
import WindowResizeListener from "react-window-size-listener";
import { ThemeProvider } from "styled-components";

import authAction from "../../redux/auth/actions";
import { toggleAll } from "modules/dashboard/dashboard.reducers";

import Sidebar from "modules/dashboard/components/Sidebar/Sidebar";
import Topbar from "modules/dashboard/components/Topbar/Topbar";

import { siteConfig, themeConfig } from "settings";
import themes from "settings/themes";

import DashboardRouter from "./dashboard.routes";
import AppHolder from "./dashboard.style";
import "./global.css";

const { Content, Footer } = Layout;
const { logout } = authAction;

export class Dashboard extends Component {
  render() {
    const { url } = this.props.match;
    const { height } = this.props;
    const appHeight = window.innerHeight;
    return (
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <AppHolder>
          <Layout style={{ height: appHeight }}>
            <Debounce time="1000" handler="onResize">
              <WindowResizeListener
                onResize={windowSize => this.props.toggleAll(windowSize.windowWidth, windowSize.windowHeight)}
              />
            </Debounce>
            <Topbar url={url} />
            <Layout style={{ flexDirection: "row", overflowX: "hidden" }}>
              <Sidebar url={url} />
              <Layout
                className="dlContentMainLayout"
                style={{
                  height: height
                }}
              >
                <Content
                  className="dlContent"
                  style={{
                    padding: "70px 0 0",
                    flexShrink: "0",
                    background: "#f1f3f6",
                    position: "relative"
                  }}
                >
                  <DashboardRouter url={url} />
                </Content>
                <Footer
                  style={{
                    background: "#ffffff",
                    textAlign: "center",
                    borderTop: "1px solid #ededed"
                  }}
                >
                  {siteConfig.footerText}
                </Footer>
              </Layout>
            </Layout>
          </Layout>
        </AppHolder>
      </ThemeProvider>
    );
  }
}

export default connect(
  state => ({
    auth: state.Auth,
    height: state.Dashboard.height
  }),
  { logout, toggleAll }
)(Dashboard);
