import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches info", () => {
  const component = mount(<Alert modifiers={["info"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#0c5460");
  expect(component).toHaveStyleRule("background-color", "#d1ecf1");
  expect(component).toHaveStyleRule("border-color", "#bee5eb");
  expect(component).toHaveStyleRule("border-top-color", "#abdde5", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#062c33", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#062c33", {
    modifier: "& > a:hover"
  });
});
