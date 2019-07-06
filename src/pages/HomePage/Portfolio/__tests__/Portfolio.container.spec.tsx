import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { PortfolioContainer } from "../Portfolio.container";
import { Portfolio } from "../Portfolio";
import { rootStore } from "../../../../stores";

jest.mock("../../../../stores/rootStore");

let wrapper: ShallowWrapper;

beforeAll(() =>
  // @ts-ignore
  (wrapper = shallow(<PortfolioContainer.wrappedComponent rootStore={rootStore} />)));

it("renders Portfolio", () => {
  expect(wrapper.find(Portfolio)).toHaveLength(1);
});
