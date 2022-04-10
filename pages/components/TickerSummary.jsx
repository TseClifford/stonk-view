const TickerSummary = ({ stockData }) => {
  return (
    <div>
      <div className="flex justify-between">
        <p>{stockData.ticker}</p>
        <div className="flex justify-between space-x-5">
          <p>${stockData.price}</p>
          <p className="text-green-500">{stockData.dailyPercentChange}%</p>
        </div>
      </div>
      <div className="flex justify-between">
        <p className="text-gray-500">{stockData.stock}</p>
        <p className="text-green-500">{stockData.dailyAmountChange}</p>
      </div>
    </div>
  );
};

export default TickerSummary;
