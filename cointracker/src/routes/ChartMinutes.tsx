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
  width: 40%;
  margin: 20px;
`;
/**declaration param is first i have to do, second is sending param from parent components to here. : like this functions's >coinId< */
function ChartMinutes({ coinId }: ChartProps) {
  const { isLoading, data: minutesPriceCandle } = useQuery<ICoinType[]>(
    ["coinMinutesPriceData", coinId],
    () => getMinutesData(coinId),
    {
      refetchInterval: 10000,
    }
  );

  /***************************
   show screen depending how our current state is**************************/
  return (
    <ChartContainer>
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
          theme: {
            mode: "dark",
          },

          yaxis: {
            labels: {
              style: {
                colors: "#fff",
              },
            },
            axisTicks: {
              color: "#111",
            },
          },
          xaxis: {
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
            },
          },
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#ff002b",
                downward: "#00074bcf",
              },
              wick: {
                useFillColor: true,
              },
            },
          },
          chart: {
            width: "250px",
          },
        }}
      />
    </ChartContainer>
  );
}
export default ChartMinutes;
