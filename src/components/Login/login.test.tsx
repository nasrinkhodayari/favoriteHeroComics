import React from "react";
import { shallow} from 'enzyme';
import Login from "./index";

describe("Test case for testing login", () => {
  let wrapper;
  test("username check", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "bryon" }
    });
    expect(wrapper.state("username")).toEqual("bryon");
  });
  it("password check", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "714941" }
    });
    expect(wrapper.state("password")).toEqual("714941");
  });
  it("login check with right data", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "bryon" }
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "714941" }
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(true);
  });
  it("login check with wrong data", () => {
    wrapper = shallow(<Login />);
    wrapper.find('input[type="text"]').simulate("change", {
      target: { name: "username", value: "bryon" }
    });
    wrapper.find('input[type="password"]').simulate("change", {
      target: { name: "password", value: "krishankant1234" }
    });
    wrapper.find("button").simulate("click");
    expect(wrapper.state("isLogined")).toBe(false);
  });
});
