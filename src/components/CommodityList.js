import React from "react";
import CommodityItems from "./CommodityItems";
import "../styles/CommodityList.css";
import quotes from '../quotes.json'

export default function CommodityList() {
  return (
    <div className="quote-list">
      <div className="quote-header">
        <span className="header-script">Script</span>
        <span className="header-bid">Bid</span>
        <span className="header-ask">Ask</span>
      </div>

      {quotes.map((quote, index) => (
        <CommodityItems
          key={index}
          script={quote.commodity}
          bid={quote.bid}
          bidIsValue={quote.bidIsValue}
          ask={quote.ask}
          askisvalue={quote.askisvalue}
          change={`${quote.change.value.toFixed(
            2
          )} (${quote.change.percentage.toFixed(2)}%)`}
          bidInfo={`${quote.time} | 📊 ${quote.volume ?? "—"}`}
          open={quote.open}
          close={quote.close}
          high={quote.high}
          low={quote.low}
        />
      ))}
    </div>
  );
}
