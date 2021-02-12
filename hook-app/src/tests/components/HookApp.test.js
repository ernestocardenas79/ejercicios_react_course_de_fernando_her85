import React from "react";
import { shallow } from "enzyme";
import "@testing-library/jest-dom";
import { HookApp } from "../../HookApp";

describe("Prueba de componente <GiftGrid />", () => {
  test("Debe de crearce el componente", () => {
    const wrapper = shallow(<HookApp />);

    expect(wrapper).toMatchSnapshot();
  });
});
