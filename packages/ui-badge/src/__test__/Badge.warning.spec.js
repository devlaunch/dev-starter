import React from "react";
import TestRenderer from "react-test-renderer";
import "jest-styled-components";
import { Badge } from "lib";
const mount = el => TestRenderer.create(el).toJSON();

test("Styles matches warning", () => {
  const component = mount(<Badge modifiers={["warning"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#212529");
  expect(component).toHaveStyleRule("background-color", "#ffc107");
});

test("Styles matches warning action", () => {
  const component = mount(<Badge modifiers={["warning"]} as="a" href="#" />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#212529");
  expect(component).toHaveStyleRule("background-color", "#ffc107");
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
  expect(component).toHaveStyleRule("background-color", "#d39e00", {
    modifier: "&:focus"
  });
  expect(component).toHaveStyleRule("background-color", "#d39e00", {
    modifier: "&:focus"
  });
});
