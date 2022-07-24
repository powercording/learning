import { useQuery } from "react-query";
import { getMinutesData } from "./api";
import ApexChart from "react-apexcharts";

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

/**declaration param is first i have to do, second is sending param from parent components to here. : like this functions's coinId */
function ChartMinutes({ coinId }: ChartProps) {
  const { isLoading, data: minutesPriceCandle } = useQuery<ICoinType[]>(
    ["coinMinutesPriceData", coinId],
    () => getMinutesData(coinId)
  );

  /***************************
   show screen depending how our current state is**************************/
  return (
    <div>
      {isLoading ? (
        "now Loading...."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data: [
                {
                  x: "45",
                  y: [54, 123, 54, 3],
                },
                {
                  x: "46",
                  y: [66, 95, 52, 15],
                },
                {
                  x: "47",
                  y: [991, 323, 44, 15],
                },
              ],
            },
          ]}
          options={{
            chart: {
              type: "candlestick",
              height: 300,
              width: 200,
            },
          }}
        />
      )}
    </div>
  );
}
export default ChartMinutes;
