import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "../lib";

test("Styles matches warning", () => {
  const component = mount(<Alert modifiers={["warning"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#856404");
  expect(component).toHaveStyleRule("background-color", "#fff3cd");
  expect(component).toHaveStyleRule("border-color", "#ffeeba");
  expect(component).toHaveStyleRule("border-top-color", "#ffe8a1", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#533f03", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#533f03", {
    modifier: "& > a:hover"
  });
});
