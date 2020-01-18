import React, { useState } from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";
import EyeIcon from "../EyeIcon";
import ProgressBar from "../ProgressBar/ProgressBar";
/** Password input with integrated label, quality tips, and show password toggle. It is a part of Specialization Pattern. */
const PasswordInput = ({
  htmlId,
  value,
  label = "Password",
  error,
  onChange,
  placeholder,
  maxLength = 50,
  showVisibilityToggle = false,
  quality,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleVisibility = event => {
    if (event) {
      event.preventDefault();
    }

    setShowPassword(!showPassword);
  };
  return (
    <TextInput
      type={showPassword ? "text" : "password"}
      htmlId={htmlId}
      value={value}
      label={label}
      error={error}
      onChange={onChange}
      placeholder={placeholder}
      maxLength={maxLength}
      required
      {...props}
    >
      {showVisibilityToggle && (
        <a href="#" onClick={handleVisibility} style={{ marginLeft: 5 }}>
          <EyeIcon />
        </a>
      )}
      {value && value.length && quality && (
        <ProgressBar percent={quality} width={130} />
      )}
    </TextInput>
  );
};

PasswordInput.propTypes = {
  /** Unique HTML ID. Used for tying label to HTML input. Handy hook for automated testing. */
  htmlId: PropTypes.string.isRequired,

  /** Input name. Recommend setting this to match object's property so a single change handler can be used by convention.*/
  name: PropTypes.string.isRequired,

  /** Password value */
  value: PropTypes.any,

  /** Input label */
  label: PropTypes.string,

  /** Function called when password input value changes */
  onChange: PropTypes.func.isRequired,

  /** Max password length accepted */
  maxLength: PropTypes.number,

  /** Placeholder displayed when no password is entered */
  placeholder: PropTypes.string,

  /** Set to true to show the toggle for displaying the currently entered password */
  showVisibilityToggle: PropTypes.bool,

  /** Display password quality visually via ProgressBar, accepts a number between 0 and 100 */
  quality: PropTypes.number,

  /** Validation error to display */
  error: PropTypes.string
};

export default PasswordInput;
