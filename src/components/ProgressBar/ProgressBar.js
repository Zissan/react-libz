import React from "react";
import PropTypes from "prop-types";

const getColor = percent => {
  if (percent === 100) {
    return "green";
  }

  if (percent > 50) {
    return "lightgreen";
  }
  return "red";
};

const getProgressWidth = (percent, width) => {
  return parseInt((percent / 100) * width, 10);
};

const ProgressBar = ({ percent, width, height = 5 }) => {
  return (
    <div style={{ width: width, border: "1px solid lightgray" }}>
      <div
        style={{
          width: getProgressWidth(percent, width),
          height,
          backgroundColor: getColor(percent)
        }}
      ></div>
    </div>
  );
};

ProgressBar.propTypes = {
  /** Percent of progress completed */
  percent: PropTypes.number.isRequired,
  /** Width of the progress bar */
  width: PropTypes.number.isRequired,
  /** Height of the progress bar */
  height: PropTypes.number.isRequired
};

export default ProgressBar;
