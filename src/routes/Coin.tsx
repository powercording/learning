import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

interface ICoinType {
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
}
const InfoElements = styled.div`
  width: 15%;
  margin-left: 20px;
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
  const [coin, setCoin] = useState<ICoinType[]>();

  useEffect(() => {
    (async () => {
      const singleCoinData = await (
        await fetch(
          `https://api.upbit.com/v1/candles/minutes/1?market=${coinId}&count=1`
        )
      ).json();
      setCoin(singleCoinData);
    })();
  }, [coinId]);

  return (
    <Container>
      {coin?.map((item, index) => (
        <InfoElementsBox>
          <InfoElements>Coin : {coinId}</InfoElements>
          <InfoElements>💵 현재가: {item.trade_price} 원</InfoElements>
          <InfoElements>〽 시작가 {item.opening_price} 원</InfoElements>
          <InfoElements>⬆ 오늘 최고가 {item.high_price} 원</InfoElements>
          <InfoElements>⬇ 오늘 최저가 {item.low_price} 원</InfoElements>
        </InfoElementsBox>
      ))}
    </Container>
  );
}

export default Coin;
