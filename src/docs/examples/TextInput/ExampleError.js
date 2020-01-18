import React from "react";
import TextInput from "react-libz/TextInput";
/** Required TextBox with error */
const ExampleError = () => {
  return (
    <TextInput
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
