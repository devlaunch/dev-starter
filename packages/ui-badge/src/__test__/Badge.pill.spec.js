import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches pill", () => {
  const component = mount(<Badge modifiers={["pill"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("padding-right", "0.6em");
  expect(component).toHaveStyleRule("padding-left", "0.6em");
  expect(component).toHaveStyleRule("border-radius", "10rem");
});
