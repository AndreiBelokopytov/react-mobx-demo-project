import * as React from "react";
import { inject } from "mobx-react";
import { RootStore } from "../../stores";
import { HomePage } from "./HomePage";

export type HomePageContainerProps = {
  rootStore?: RootStore;
};

@inject("rootStore")
export class HomePageContainer extends React.Component<HomePageContainerProps> {
  componentDidMount(): void {
    const { portfolioStore, tickersStore } = this.props.rootStore!;
    portfolioStore.loadPortfolio();
    tickersStore.loadTickers().then(this.updateTicker);
  }

  private updateTicker = () => {
    const { tickersStore } = this.props.rootStore!;
    setTimeout(() => tickersStore.loadTickers().then(this.updateTicker), 3000);
  };

  public render() {
    return <HomePage />;
  }
}
