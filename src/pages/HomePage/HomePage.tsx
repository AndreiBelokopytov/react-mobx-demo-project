import * as React from "react";
import { inject } from "mobx-react";
import { PortfolioContainer } from "./Portfolio";
import { RootStore } from "../../stores";
import { TickersContainer } from "./Tickers";

export type HomePageProps = {
  rootStore?: RootStore;
};

@inject("rootStore")
export class HomePage extends React.Component<HomePageProps> {
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
    return (
      <div>
        <PortfolioContainer />
        <TickersContainer />
      </div>
    );
  }
}
