import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches success", () => {
  const component = mount(<Alert success />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#155724");
  expect(component).toHaveStyleRule("background-color", "#d4edda");
  expect(component).toHaveStyleRule("border-color", "#c3e6cb");
  expect(component).toHaveStyleRule("border-top-color", "#b1dfbb", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#0b2e13", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#0b2e13", {
    modifier: "& > a:hover"
  });
});
