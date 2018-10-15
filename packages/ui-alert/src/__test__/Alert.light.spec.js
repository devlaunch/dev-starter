import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";
import "jest-styled-components";

import { Alert } from "lib";

test("Styles matches light", () => {
  const component = mount(<Alert light />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("color", "#818182");
  expect(component).toHaveStyleRule("background-color", "#fefefe");
  expect(component).toHaveStyleRule("border-color", "#fdfdfe");
  expect(component).toHaveStyleRule("border-top-color", "#ececf6", {
    modifier: "& > hr"
  });
  expect(component).toHaveStyleRule("color", "#686868", {
    modifier: "& > a"
  });
  expect(component).toHaveStyleRule("color", "#686868", {
    modifier: "& > a:hover"
  });
});
