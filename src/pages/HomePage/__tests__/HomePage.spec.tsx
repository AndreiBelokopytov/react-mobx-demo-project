import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { HomePage } from "../HomePage";
import { PortfolioContainer } from "../Portfolio";
import { TickersContainer } from "../Tickers";

let wrapper: ShallowWrapper;

beforeAll(() => (wrapper = shallow(<HomePage />)));

it("renders PortfolioContainer", () => {
  expect(wrapper.find(PortfolioContainer)).toHaveLength(1);
});

it("renders TickersContainer", () => {
  expect(wrapper.find(TickersContainer)).toHaveLength(1);
});
