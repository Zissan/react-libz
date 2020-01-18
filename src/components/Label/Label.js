import React from "react";
import PropTypes from "prop-types";
/** Label with required field display, htmlFor and block styling */
const Label = ({ htmlFor, label, required = false }) => {
  return (
    <label style={{ display: "block" }} htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </label>
  );
};

Label.propTypes = {
  /** ID of the HTML controls to be associated with the label */
  htmlFor: PropTypes.string.isRequired,
  /** Label text */
  label: PropTypes.string.isRequired,
  /** Indicates whether the associated control is a required field if true */
  required: PropTypes.bool
};

export default Label;
