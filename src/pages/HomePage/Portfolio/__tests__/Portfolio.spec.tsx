import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Portfolio } from "../Portfolio";

const portfolio = [
  {
    symbol: "BTC",
    amount: 0.32
  },
  {
    symbol: "LTC",
    amount: 2.77
  },
  {
    symbol: "XRP",
    amount: 0.00131
  }
];

let wrapper: ShallowWrapper;

beforeAll(() => (wrapper = shallow(<Portfolio portfolio={portfolio} />)));

it("renders table header", () => {
  expect(wrapper.find("thead th")).toHaveLength(portfolio.length);
});

it("renders one row in the tbody", () => {
  expect(wrapper.find("tbody > tr")).toHaveLength(1);
});
