import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches primary", () => {
  const component = mount(<Alert primary />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#004085");
  expect(component).toHaveStyleRule("background-color", "#cce5ff");
  expect(component).toHaveStyleRule("border-color", "#b8daff");
  expect(component).toHaveStyleRule("border-top-color", "#9fcdff", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#002752", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#002752", {
    modifier: "& > a:hover"
  });
});
