import React from 'react';
import PropTypes from 'prop-types';

const ListErrors = (props) => {
  const { errors } = props.errors;
  if (errors) {
    return (
      <ul className="error-messages">
        {Object.keys(errors).map(key => (
          <li key={key}>
            {key} {errors[key]}
          </li>
        ))}
      </ul>
    );
  }
  return null;
};

ListErrors.defaultProps = {
  errors: null,
};

ListErrors.propTypes = {
  errors: PropTypes.objectOf(PropTypes.string),
};

export default ListErrors;
