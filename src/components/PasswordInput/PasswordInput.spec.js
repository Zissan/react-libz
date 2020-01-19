import React from "react";
import renderer from "react-test-renderer";
import PasswordInput from "./PasswordInput";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

/** Snapshot testing is part of a Structural testing */
test("hides password quality by default", () => {
  const tree = renderer
    .create(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="123456789"
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

/** Interaction Testing using Shallow */

describe("when PasswordInput loads for the first time with showVisibilityToggle as true", () => {
  it("should have one password field", () => {
    /** ARRANGE */
    const wrapper = shallow(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="123456789"
        showVisibilityToggle
      />
    );

    /** ASSERT */
    expect(wrapper.find({ type: "password" })).toHaveLength(1);
  });

  it("should have no text field", () => {
    /** ARRANGE */
    const wrapper = shallow(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="123456789"
        showVisibilityToggle
      />
    );

    /** ASSERT */
    expect(wrapper.find({ type: "text" })).toHaveLength(0);
  });
});

describe("when showPassword is clicked", () => {
  it("should have onone password field", () => {
    /** ARRANGE */
    const wrapper = shallow(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="123456789"
        showVisibilityToggle
      />
    );

    /** ACT */
    wrapper.find("a").simulate("click");

    /** ASSERT */
    expect(wrapper.find({ type: "password" })).toHaveLength(0);
  });

  it("should have one text field", () => {
    /** ARRANGE */
    const wrapper = shallow(
      <PasswordInput
        htmlId="test"
        name="test"
        onChange={() => {}}
        value="123456789"
        showVisibilityToggle
      />
    );

    /** ACT */
    wrapper.find("a").simulate("click");

    /** ASSERT */
    expect(wrapper.find({ type: "text" })).toHaveLength(1);
  });
});
