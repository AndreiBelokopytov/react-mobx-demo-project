import * as React from "react";
import { TickersTableRecord } from "./model";

export type TickersProps = {
  tickers: TickersTableRecord[];
};

export type TickerTableCol = {
  title: string;
  prop: keyof TickersTableRecord;
};

export const tickerTableCols: TickerTableCol[] = [
  {
    title: "Symbol",
    prop: "symbol"
  },
  {
    title: "Last",
    prop: "last"
  },
  {
    title: "Lowest ask",
    prop: "lowestAsk"
  },
  {
    title: "Highest Bid",
    prop: "highestBid"
  },
  {
    title: "Percent Change",
    prop: "percentChange"
  }
];

export const Tickers = ({ tickers }: TickersProps) => {
  const header = tickerTableCols.map((col, index) => (
    <th key={index}>{col.title}</th>
  ));
  const body = tickers.map(ticker => {
    const cells = tickerTableCols.map((col, index) => (
      <td key={index}>{ticker[col.prop]}</td>
    ));
    return <tr key={ticker.symbol}>{cells}</tr>;
  });
  return (
    <div>
      <h3>Tickers</h3>
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
};
