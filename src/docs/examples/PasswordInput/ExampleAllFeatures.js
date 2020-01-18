import React, { useState } from "react";
import PasswordInput from "react-libz/PasswordInput";

const ExampleAllFeatures = () => {
  const [value, setValue] = useState("");
  const handleChange = ({ target }) => {
    setValue(target.value);
  };

  const getQuality = () => {
    return value.length > 10 ? 100 : value.length * 10;
  };
  return (
    <div>
      <PasswordInput
        htmlId="password-input-export-all-features"
        name="password"
        value={value}
        onChange={handleChange}
        quality={getQuality()}
        placeholder="Enter Password"
        showVisibilityToggle
      />
    </div>
  );
};

export default ExampleAllFeatures;
