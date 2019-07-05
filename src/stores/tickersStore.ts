import { action, observable } from "mobx";
import { PoloniexTickersTable } from "../model";

export class TickersStore {
  @observable
  tickers: PoloniexTickersTable = {};

  @action
  loadTickers = async () => {
    const response = await fetch(
      "https://poloniex.com/public?command=returnTicker"
    );
    this.tickers = await response.json();
  };
}

export const tickersStore = new TickersStore();
