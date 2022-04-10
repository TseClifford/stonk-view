import Link from "next/link";
import TickerSummary from "../components/TickerSummary";

export default function Stocks() {
  const appleStock = {
    stock: "Apple",
    ticker: "AAPL",
    dailyPercentChange: 0.4,
    dailyAmountChange: 2.05,
    price: 170.09,
  };

  return (
    <div className="flex flex-col w-1/2">
      <p>This is the overview page for Stocks.</p>
      <div>
        Stocks:
        <TickerSummary stockData={appleStock} />
      </div>
      <Link href="/">Back to Homepage</Link>
    </div>
  );
}
