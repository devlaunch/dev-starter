import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches plane", () => {
  const component = mount(<Alert />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("position", "relative");
  expect(component).toHaveStyleRule("padding", "0.75rem 1.25rem");
  expect(component).toHaveStyleRule("margin-bottom", "1rem");
  expect(component).toHaveStyleRule("border", "1px solid transparent");
  expect(component).toHaveStyleRule("border-radius", "0.25rem");
  expect(component).toHaveStyleRule("font-weight", "700", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h1"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h2"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h3"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h4"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h5"
  });
  expect(component).toHaveStyleRule("color", "inherit", {
    modifier: "& > h6"
  });
});
