import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches light", () => {
  const component = mount(<Badge modifiers={["light"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#212529");
  expect(component).toHaveStyleRule("background-color", "#f8f9fa");
});

test("Styles matches light action", () => {
  const component = mount(<Badge modifiers={["light"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#212529");
  expect(component).toHaveStyleRule("background-color", "#f8f9fa");
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#212529", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a:hover"
  });
  expect(component).toHaveStyleRule("color", "#212529", {
    modifier: "& > a:hover"
  });
  expect(component).toHaveStyleRule("text-decoration", "none", {
    modifier: "& > a:focus"
  });
  expect(component).toHaveStyleRule("color", "#212529", {
    modifier: "& > a:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#dae0e5", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#dae0e5", {
    modifier: "&:focus"
  });
});
