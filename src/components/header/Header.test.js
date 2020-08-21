import React from "react";
import Enzyme, { mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../store";
import renderer from "react-test-renderer";
import HeaderContainer from "./HeaderContainer";
Enzyme.configure({ adapter: new Adapter() });

describe("<HeaderContainer /> component", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("should find app title correctly", () => {
    const wrapper = mount(
      <Provider store={store}>
        <HeaderContainer searchParamLength={null} />
      </Provider>
    );
    expect(wrapper.find("h1.App-title").text()).toEqual("Top Headlines");
  });
});
