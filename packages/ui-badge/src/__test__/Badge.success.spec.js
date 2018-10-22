import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches success", () => {
  const component = mount(<Badge modifiers={["success"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#28a745");
});

test("Styles matches success action", () => {
  const component = mount(<Badge modifiers={["success"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#28a745");
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
  expect(component).toHaveStyleRule("background-color", "#1e7e34", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#1e7e34", {
    modifier: "&:focus"
  });
});
