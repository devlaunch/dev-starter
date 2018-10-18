import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches secondary", () => {
  const component = mount(<Alert modifiers={["secondary"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#383d41");
  expect(component).toHaveStyleRule("background-color", "#e2e3e5");
  expect(component).toHaveStyleRule("border-color", "#d6d8db");
  expect(component).toHaveStyleRule("border-top-color", "#c8cbcf", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#202326", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#202326", {
    modifier: "& > a:hover"
  });
});
