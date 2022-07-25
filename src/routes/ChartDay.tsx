import { useQuery } from "react-query";
import styled from "styled-components";
import { getDaysData } from "./api";
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

const ChartContainer = styled.div`
  width: 40%;
  margin: 20px;
`;

function ChartDay({ coinId }: ChartProps) {
  const { isLoading, data: dyaPrice } = useQuery<ICoinType[]>(
    ["coinDayPrice", coinId],
    () => getDaysData(coinId),
    {
      refetchInterval: 10000,
    }
  );
  return (
    <ChartContainer>
      <ApexChart
        type="candlestick"
        series={[
          {
            name: "price",
            data: dyaPrice!?.map((coin) => ({
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
          yaxis: {
            labels: {
              style: {
                colors: "#fff",
              },
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

export default ChartDay;
