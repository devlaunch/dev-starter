import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches primary", () => {
  const component = mount(<Badge modifiers={["primary"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#007bff");
});

test("Styles matches primary action", () => {
  const component = mount(<Badge modifiers={["primary"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#007bff");
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
  expect(component).toHaveStyleRule("background-color", "#0062cc", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#0062cc", {
    modifier: "&:focus"
  });
});
