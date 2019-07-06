import * as React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { TickersContainer } from "../Tickers.container";
import { rootStore } from "../../../../stores";
import { Tickers } from "../Tickers";

jest.mock("../../../../stores/rootStore");

let wrapper: ShallowWrapper;

beforeAll(() =>
  (wrapper = shallow(
    // @ts-ignore
    <TickersContainer.wrappedComponent rootStore={rootStore} />
  )));

it("renders Tickers component", () => {
  expect(wrapper.find(Tickers)).toHaveLength(1);
});
