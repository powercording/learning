import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPriceData } from "./api";
import ChartDay from "./ChartDay";
import ChartMinutes from "./ChartMinutes";
import { Helmet } from "react-helmet";

type ICoinType = {
  candle_acc_trade_volume: number;
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
const InfoElements = styled.div`
  width: 15%;
  margin-left: 20px;
  color: ${(props) => props.theme.focusedColor};
`;
const InfoElementsBox = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: black;
  position: sticky;
  top: 0;
`;
const Container = styled.div`
  height: 100%;
`;

function Coin() {
  const { coinId } = useParams();
  const { isLoading, data } = useQuery<ICoinType[]>(
    ["coinPriceData", coinId],
    () => getPriceData(coinId!)
  );

  return (
    <Container>
      <Helmet>
        <title>{coinId}</title>
      </Helmet>
      {data?.map((item, index) => (
        <InfoElementsBox key={index}>
          <InfoElements>Coin : {coinId}</InfoElements>
          <InfoElements>💵 현재가: {item.trade_price} 원</InfoElements>
          <InfoElements>〽 시작가 {item.opening_price} 원</InfoElements>
          <InfoElements>⬆ 오늘 최고가 {item.high_price} 원</InfoElements>
          <InfoElements>⬇ 오늘 최저가 {item.low_price} 원</InfoElements>
        </InfoElementsBox>
      ))}
      <ChartMinutes coinId={coinId!} />
      <ChartDay coinId={coinId!} />
    </Container>
  );
}

export default Coin;
