import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const EditProfileSettings = props => {
  if (props.isUser) {
    return (
      <Link
        to="/settings"
        className="btn btn-sm btn-outline-secondary action-btn"
      >
        <i className="ion-gear-a" /> Edit Profile Settings
      </Link>
    );
  }
  return null;
};

EditProfileSettings.defaultProps = {
  isUser: false
};

EditProfileSettings.propTypes = {
  isUser: PropTypes.bool
};

export default EditProfileSettings;
