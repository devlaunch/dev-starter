import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { Input } from "components/ui-elements/data-entry/input";
import { Checkbox } from "components/ui-elements/data-entry/checkbox";
import { Button } from "components/ui-elements/general/button";
import { Logo } from "components/ui-blocks/logo";

import authAction from "../../redux/auth/actions";
import SignInStyleWrapper from "./signin.style";

const { login } = authAction;

class SignIn extends Component {
  state = {
    redirectToReferrer: false
  };
  componentWillReceiveProps(nextProps) {
    if (
      this.props.isLoggedIn !== nextProps.isLoggedIn &&
      nextProps.isLoggedIn === true
    ) {
      this.setState({ redirectToReferrer: true });
    }
  }
  handleLogin = () => {
    const { login } = this.props;
    login();
    this.props.history.push("/dashboard");
  };
  render() {
    const from = { pathname: "/dashboard" };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }
    return (
      <SignInStyleWrapper className="dlSignInPage">
        <div className="dlLoginContentWrapper">
          <div className="dlLoginContent">
            <Logo collapsed={false} />

            <div className="dlSignInForm">
              <div className="dlInputWrapper">
                <Input size="large" placeholder="Username" />
              </div>

              <div className="dlInputWrapper">
                <Input size="large" type="password" placeholder="Password" />
              </div>

              <div className="dlInputWrapper dlLeftRightComponent">
                <Checkbox>Remember me</Checkbox>
                <Button type="primary" onClick={this.handleLogin}>
                  Sign In
                </Button>
              </div>
              <div className="dlCenterComponent dlHelperWrapper">
                <Link to="" className="dlForgotPass">
                  Forgot Password?
                </Link>
                <Link to="">Register with us for an account</Link>
              </div>
            </div>
          </div>
        </div>
      </SignInStyleWrapper>
    );
  }
}

export default connect(
  state => ({
    isLoggedIn: state.Auth.idToken !== null ? true : false
  }),
  { login }
)(SignIn);
