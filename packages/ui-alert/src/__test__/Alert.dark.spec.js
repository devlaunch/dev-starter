import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches dark", () => {
  const component = mount(<Alert modifiers={["dark"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#1b1e21");
  expect(component).toHaveStyleRule("background-color", "#d6d8d9");
  expect(component).toHaveStyleRule("border-color", "#c6c8ca");
  expect(component).toHaveStyleRule("border-top-color", "#b9bbbe", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#040505", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#040505", {
    modifier: "& > a:hover"
  });
});
