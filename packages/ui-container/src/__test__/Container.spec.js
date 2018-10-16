import React from "react";
import { mount } from "enzyme";

import { Container } from "lib";

// TODO: how to test @media queries
test("Styles matches Container", () => {
  const component = mount(<Container />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule(
    "font-family",
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
  );
  expect(component).toHaveStyleRule("width", "100%");
  expect(component).toHaveStyleRule("margin-right", "auto");
  expect(component).toHaveStyleRule("margin-left", "auto");
  expect(component).toHaveStyleRule("font-size", "1rem");
  expect(component).toHaveStyleRule("font-weight", "400");
  expect(component).toHaveStyleRule("line-height", "1.5");
  expect(component).toHaveStyleRule("box-sizing", "border-box");
});

// TODO: how to test @media queries
test("Styles matches Container fluid", () => {
  const component = mount(<Container fluid />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule(
    "font-family",
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"'
  );
  expect(component).toHaveStyleRule("width", "100%");
  expect(component).toHaveStyleRule("margin-right", "auto");
  expect(component).toHaveStyleRule("margin-left", "auto");
  expect(component).toHaveStyleRule("font-size", "1rem");
  expect(component).toHaveStyleRule("font-weight", "400");
  expect(component).toHaveStyleRule("line-height", "1.5");
  expect(component).toHaveStyleRule("box-sizing", "border-box");
});
