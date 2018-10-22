import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";

const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches dark", () => {
  const component = mount(<Badge modifiers={["dark"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#343a40");
});

test("Styles matches dark action", () => {
  const component = mount(<Badge modifiers={["dark"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#343a40");
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
  expect(component).toHaveStyleRule("background-color", "#1d2124", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#1d2124", {
    modifier: "&:focus"
  });
});
