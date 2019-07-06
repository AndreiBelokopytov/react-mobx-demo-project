export const rootStore = {
  portfolioStore: {
    portfolio: [],
    loadPortfolio: jest.fn()
  },
  tickersStore: {
    tickers: [],
    loadTickers: jest.fn(() => Promise.resolve())
  }
};
