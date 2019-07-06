import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { Tickers, tickerTableCols } from "../Tickers";

let wrapper: ShallowWrapper;

const tickers = [
  {
    symbol: "BTC_BCN",
    id: 7,
    last: "0.00000008",
    lowestAsk: "0.00000009",
    highestBid: "0.00000008",
    percentChange: "0.00000000",
    baseVolume: "1.66880322",
    quoteVolume: "21314865.36343166",
    isFrozen: "0",
    high24hr: "0.00000009",
    low24hr: "0.00000007"
  },
  {
    symbol: "BTC_BTS",
    id: 14,
    last: "0.00000531",
    lowestAsk: "0.00000531",
    highestBid: "0.00000528",
    percentChange: "-0.00561797",
    baseVolume: "2.10910098",
    quoteVolume: "397026.16858555",
    isFrozen: "0",
    high24hr: "0.00000549",
    low24hr: "0.00000519"
  }
];

beforeAll(() => (wrapper = shallow(<Tickers tickers={tickers} />)));

it("renders table header", () => {
  expect(wrapper.find("thead th")).toHaveLength(tickerTableCols.length);
});

it("renders 2 rows in the tbody", () => {
  expect(wrapper.find("tbody > tr")).toHaveLength(2);
});
