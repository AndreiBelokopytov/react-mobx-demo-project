import {observable, action} from 'mobx';
import {
  PortfolioItem
} from '../model';


export class PortfolioStore {
  @observable
  portfolio: PortfolioItem[] = [];

  @action
  loadPortfolio = () => {
    this.portfolio = [
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
    ]
  }
}

export const portfolioStore = new PortfolioStore();
