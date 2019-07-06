import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { HomePageContainer } from "../HomePage.container";
import { rootStore } from "../../../stores";
import { HomePage } from "../HomePage";

jest.mock("../../../stores/rootStore");
jest.useFakeTimers();

let wrapper: ShallowWrapper;

beforeAll(() => {
  wrapper = shallow(
    // @ts-ignore
    <HomePageContainer.wrappedComponent rootStore={rootStore} />
  );
});

it("renders HomePage component", () => {
  expect(wrapper.find(HomePage)).toHaveLength(1);
});

it("calls loadPortfolio in componentDidMount", () => {
  expect(rootStore.portfolioStore.loadPortfolio).toHaveBeenCalled();
});

it("calls loadTickers in componentDidMount", () => {
  expect(rootStore.tickersStore.loadTickers).toHaveBeenCalled();
});

it("calls setTimeout", () => {
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
