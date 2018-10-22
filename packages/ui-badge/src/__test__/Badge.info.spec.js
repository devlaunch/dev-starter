import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";

import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches info", () => {
  const component = mount(<Badge modifiers={["info"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#17a2b8");
});

test("Styles matches info action", () => {
  const component = mount(<Badge modifiers={["info"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#17a2b8");
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#fff", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a:hover"
  });
  expect(component).toHaveStyleRule("color", "#fff", {
    modifier: "& > a:hover"
  });
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a:focus"
  });
  expect(component).toHaveStyleRule("color", "#fff", {
    modifier: "& > a:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#117a8b", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#117a8b", {
    modifier: "&:focus"
  });
});
