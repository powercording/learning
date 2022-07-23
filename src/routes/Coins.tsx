import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template: "NameList CoinBox" 1fr / 2fr 11fr;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: NameList;
  min-width: 200px;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);
`;
const KRWCoins = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Coin = styled.div`
  display: flex;
  align-items: center;
  width: 45%;
  height: 50px;
  border: 1px solid rgba(255, 255, 255, 0.4);
  border-radius: 5px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0.5px 0.5px 0.5px 0.5px;
  transition: background-color 0.2s ease-in;
  a {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  :hover {
    background-color: ${(props) => props.theme.focusedColor};
    color: black;
  }
`;
const CoinWrapper = styled.div`
  grid-area: CoinBox;
`;
const Header = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  padding: 5px;
`;
const CoinName = styled.h2`
  color: ${(props) => props.theme.focusedColor};
  padding-left: 8px;
`;

type ICoin = {
  market: string;
  korean_name: string;
  english_name: string;
};

function Coins() {
  const [coinData, setCoindata] = useState<ICoin[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await (
        await fetch("https://api.upbit.com/v1/market/all")
      ).json();
      setLoading(() => false);
      setCoindata(() => response.slice(0, 100));
    })();
  }, []);

  const newArray = coinData.filter((item) => {
    if (item.market.indexOf("KRW") > -1) {
      return item;
    }
  });

  return (
    <Container>
      <NameWrapper>
        <Header>{isLoading ? "Loading" : "COIN"}</Header>
        <CoinName>names</CoinName>
        <br />
        <KRWCoins>
          {newArray.map((eachCoin, index) => (
            <Coin key={index}>
              <Link to={`/${eachCoin.market}`}>
                {eachCoin.english_name.toUpperCase()}
              </Link>
            </Coin>
          ))}
        </KRWCoins>
      </NameWrapper>
      <CoinWrapper>
        <Outlet />
      </CoinWrapper>
    </Container>
  );
}
export default Coins;
