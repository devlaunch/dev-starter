import React from "react";
import PropTypes from "prop-types";

const FollowUserButton = props => {
  if (props.isUser) {
    return null;
  }

  let classes = "btn btn-sm action-btn";
  if (props.user.following) {
    classes += " btn-secondary";
  } else {
    classes += " btn-outline-secondary";
  }

  const handleClick = ev => {
    ev.preventDefault();
    if (props.user.following) {
      props.unfollow(props.user.username);
    } else {
      props.follow(props.user.username);
    }
  };

  return (
    <button className={classes} onClick={handleClick}>
      <i className="ion-plus-round" />
      &nbsp;
      {props.user.following ? "Unfollow" : "Follow"} {props.user.username}
    </button>
  );
};

FollowUserButton.defaultProps = {
  isUser: false,
  user: null,
  follow: null,
  unfollow: null
};

FollowUserButton.propTypes = {
  isUser: PropTypes.bool,
  user: PropTypes.instanceOf(PropTypes.object),
  follow: PropTypes.string,
  unfollow: PropTypes.string
};

export default FollowUserButton;
