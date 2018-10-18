import React from "react";
import { mount } from "enzyme";

import { Alert } from "lib";

test("Styles matches danger", () => {
  const component = mount(<Alert modifiers={["danger"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#721c24");
  expect(component).toHaveStyleRule("background-color", "#f8d7da");
  expect(component).toHaveStyleRule("border-color", "#f5c6cb");
  expect(component).toHaveStyleRule("border-top-color", "#f1b0b7", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#491217", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#491217", {
    modifier: "& > a:hover"
  });
});
