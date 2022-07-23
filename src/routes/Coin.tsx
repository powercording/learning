import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

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

const InfoList = styled.div`
  display: flex;
  width: 100%;
`;
const InfoElements = styled.div`
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  width: 20%;
  color: white;
  border: 1px solid white;
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

  let box: ICoinType = {};
  coin?.map((i) => {
    box = { ...i };
  });
  console.log(box);

  return (
    <InfoList>
      <InfoElements>Market: {coinId}</InfoElements>
      <InfoElements>{box.opening_price}</InfoElements>
    </InfoList>
  );
}

export default Coin;
