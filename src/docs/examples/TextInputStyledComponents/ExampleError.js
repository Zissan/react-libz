import React from "react";
import TextInputStyledComponents from "react-libz/TextInputStyledComponents";

/** Required TextBox with error */
const ExampleError = () => {
  return (
    <TextInputStyledComponents
      htmlId="example-optional"
      label="First Name"
      name="firstname"
      onChange={() => {}}
      required
      error="First name is required."
    />
  );
};

export default ExampleError;
