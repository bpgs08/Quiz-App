import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../../store";
import renderer from "react-test-renderer";
import SearchContainer from "./SearchContainer";
Enzyme.configure({ adapter: new Adapter() });

describe("<SearchContainer /> component", () => {
  it("snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <SearchContainer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
