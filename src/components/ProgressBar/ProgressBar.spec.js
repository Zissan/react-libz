import React from "react";
import ProgressBar, { getProgressWidth } from "./ProgressBar";
import { shallow } from "enzyme";

describe("ProgressBar", () => {
  test("getProgressWidth", () => {
    const percent = 100;
    const width = 500;

    const result = getProgressWidth(percent, width);

    expect(result).toEqual(500);
  });
});
