import * as React from "react";
import { computed } from "mobx";
import { keys } from "lodash";
import { inject, observer } from "mobx-react";
import { Tickers } from "./Tickers";
import { RootStore } from "../../../stores";
import { TickersTableRecord } from "./model";

export type TickersContainerProps = {
  rootStore?: RootStore;
};

@inject("rootStore")
@observer
export class TickersContainer extends React.Component<TickersContainerProps> {
  @computed
  private get tickers(): TickersTableRecord[] {
    const { tickersStore } = this.props.rootStore!;
    return keys(tickersStore.tickers).slice(0, 30).map(key => {
      return {
        symbol: key,
        ...tickersStore.tickers[key]
      };
    });
  }

  public render() {
    return <Tickers tickers={this.tickers} />;
  }
}
