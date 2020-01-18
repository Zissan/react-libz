import React from "react";
import ProgressBar from "react-libz/ProgressBar";
/** 100% Progress and height 20px */
const Example100Percent = () => {
  return (
    <div>
      <ProgressBar width={150} percent={100} height={20} />
    </div>
  );
};

export default Example100Percent;
