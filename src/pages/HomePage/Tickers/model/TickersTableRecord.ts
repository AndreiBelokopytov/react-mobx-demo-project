import { PoloniexTicker } from "../../../../model";

export type TickersTableRecord = {
  symbol: string;
} & PoloniexTicker;
