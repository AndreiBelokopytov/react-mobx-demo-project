import { portfolioStore } from "./portfolioStore";
import { tickersStore } from "./tickersStore";

export const rootStore = {
  portfolioStore,
  tickersStore
};

export type RootStore = typeof rootStore;
