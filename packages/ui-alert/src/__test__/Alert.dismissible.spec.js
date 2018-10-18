import React from "react";
import { mount } from "enzyme";
// import renderer from "react-test-renderer";

import { Alert } from "lib";

test("Styles matches dismissible", () => {
  const component = mount(<Alert modifiers={["dismissible"]} />);
  expect(component).toMatchSnapshot();
  expect(component).toHaveStyleRule("padding-right", "4rem");
});
