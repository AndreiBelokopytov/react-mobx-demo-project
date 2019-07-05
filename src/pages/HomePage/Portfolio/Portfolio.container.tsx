import * as React from "react";
import { inject, observer } from "mobx-react";
import { Portfolio } from "./Portfolio";
import { RootStore } from "../../../stores";

export type PortfolioContainerProps = {
  rootStore?: RootStore;
};

@inject("rootStore")
@observer
export class PortfolioContainer extends React.Component<
  PortfolioContainerProps
> {
  public render() {
    const { portfolioStore } = this.props.rootStore!;
    return <Portfolio portfolio={portfolioStore.portfolio} />;
  }
}
