import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches plane", () => {
  const component = mount(<Badge />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("display", "inline-block");
  expect(component).toHaveStyleRule("padding", "0.25em 0.4em");
  expect(component).toHaveStyleRule("font-size", "75%");
  expect(component).toHaveStyleRule("font-weight", "700");
  expect(component).toHaveStyleRule("line-height", "1");
  expect(component).toHaveStyleRule("text-align", "center");
  expect(component).toHaveStyleRule("white-space", "nowrap");
  expect(component).toHaveStyleRule("vertical-align", "baseline");
  expect(component).toHaveStyleRule("border-radius", "0.25rem");
  expect(component).toHaveStyleRule("display", "none", {
    modifier: "&:empty"
  });
});
