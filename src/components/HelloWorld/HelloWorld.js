import React from "react";
import PropTypes from "prop-types";
/** A Hello World componet to demonstrate the use of react-docgen */
function HelloWorld({ message }) {
  return <div>Hello {message}</div>;
}

HelloWorld.propTypes = {
  /** Message to display */
  message: PropTypes.string.isRequired
};

HelloWorld.defaultProps = {
  message: "World"
};

export default HelloWorld;
