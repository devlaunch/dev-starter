import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import ListErrors from '../../components/ListErrors';
import SettingsForm from './SettingsForm';
import { saveSettings, unloadSettings } from '../../modules/settings';

const Settings = props => (
  <div className="settings-page">
    <div className="container page">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h1 className="text-xs-center">Your Settings</h1>

          <ListErrors errors={props.errors} />

          <SettingsForm currentUser={props.currentUser} onSubmitForm={props.onSubmitForm} />

          <hr />

          <button className="btn btn-outline-danger" onClick={props.onClickLogout}>
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  </div>
);

Settings.defaultProps = {
  errors: null,
  currentUser: null,
  onSubmitForm: null,
  onClickLogout: null,
};

Settings.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
  currentUser: PropTypes.objectOf(PropTypes.object),
  onSubmitForm: PropTypes.func,
  onClickLogout: PropTypes.func,
};

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user => dispatch(saveSettings(user)),
  onUnload: () => dispatch(unloadSettings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
