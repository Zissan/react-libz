import React from "react";
import TextInputBEM from "react-libz/TextInputBEM";
/** Required TextBox with error */
const ExampleError = () => {
  return (
    <TextInputBEM
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
