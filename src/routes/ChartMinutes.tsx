import { useQuery } from "react-query";
import { getMinutesData } from "./api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

type ICoinType = {
  candle_acc_trade_volume: number;
  candle_acc_trade_price: number;
  candle_date_time_kst: string;
  candle_date_time_utc: string;
  high_price: number;
  low_price: number;
  market: string;
  opening_price: number;
  timestamp: number;
  trade_price: number;
  unit: number;
};
type ChartProps = {
  coinId: string;
};

const ChartContainer = styled.div`
  height: 200px;
`;
/**declaration param is first i have to do, second is sending param from parent components to here. : like this functions's >coinId< */
function ChartMinutes({ coinId }: ChartProps) {
  const { isLoading, data: minutesPriceCandle } = useQuery<ICoinType[]>(
    ["coinMinutesPriceData", coinId],
    () => getMinutesData(coinId)
  );

  /***************************
   show screen depending how our current state is**************************/
  return (
    <div>
      <ApexChart
        type="candlestick"
        series={[
          {
            name: "price",
            data: minutesPriceCandle!?.map((coin) => ({
              x: coin.candle_date_time_kst,
              y: [
                coin.opening_price,
                coin.high_price,
                coin.low_price,
                coin.trade_price,
              ],
            })),
          },
        ]}
        options={{
          chart: {
            height: 75,
            width: 75,
          },
        }}
      />
    </div>
  );
}
export default ChartMinutes;
