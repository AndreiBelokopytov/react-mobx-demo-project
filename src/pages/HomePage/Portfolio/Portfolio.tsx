import * as React from "react";
import { PortfolioItem } from "../../../model";

export type PortfolioProps = {
  portfolio: PortfolioItem[];
};

export const Portfolio = ({ portfolio }: PortfolioProps) => {
  const header = portfolio.map(item => (
    <th key={item.symbol}>{item.symbol}</th>
  ));
  const body = portfolio.map(item => (
    <td key={item.symbol}>{item.amount.toFixed(6)}</td>
  ));
  return (
    <div>
      <h3>Your Portfolio</h3>
      <table>
        <thead>
          <tr>{header}</tr>
        </thead>
        <tbody>
          <tr>{body}</tr>
        </tbody>
      </table>
    </div>
  );
};
