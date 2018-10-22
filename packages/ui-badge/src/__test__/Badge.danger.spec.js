import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";

const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches danger", () => {
  const component = mount(<Badge modifiers={["danger"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#dc3545");
});

test("Styles matches danger action", () => {
  const component = mount(<Badge modifiers={["danger"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#fff");
  expect(component).toHaveStyleRule("background-color", "#dc3545");
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
  expect(component).toHaveStyleRule("background-color", "#bd2130", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#bd2130", {
    modifier: "&:focus"
  });
});
