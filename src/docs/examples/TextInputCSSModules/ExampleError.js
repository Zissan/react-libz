import React from "react";
import TextInputCSSModules from "react-libz/TextInputCSSModules";
/** Required TextBox with error */
const ExampleError = () => {
  return (
    <TextInputCSSModules
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
