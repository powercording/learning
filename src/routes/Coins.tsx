import axios, { Axios } from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template: "NameList CoinBox" 1fr / 1fr 10fr;
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: NameList;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const ListOfCoins = styled.div`
  background-color: white;
`;

const CoinWrapper = styled.div`
  display: flex;
  height: 100vh;
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
interface IPrice {
  price: string;
  qty: string;
}
type ICoinData = {
  quote_currency: string;
  target_currency: string;
  timestamp: string;
  high: string;
  low: string;
  first: string;
  last: string;
  quote_volume: string;
  target_volume: string;
  best_ask: IPrice[];
  id: string;
};

function Coins() {
  const [coinData, setCoindata] = useState<ICoinData[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.coinone.co.kr/public/v2/ticker_new/KRW", {
        withCredentials: true,
      })
      .then((res) => {
        setLoading(false);
        setCoindata((preValue) => res.data.tickers.slice(0, 100));
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(coinData);

  return (
    <Container>
      <NameWrapper>
        <Header>{isLoading ? "Loading" : "COIN"}</Header>
        <CoinName>names</CoinName>
        <ListWrapper>
          {coinData.map((coin, index) => (
            <Link key={index} to={`/${coin.target_currency}`}>
              <ListOfCoins>{coin.target_currency}</ListOfCoins>
            </Link>
          ))}
        </ListWrapper>
      </NameWrapper>
      <CoinWrapper>
        <Outlet />
      </CoinWrapper>
    </Container>
  );
}
export default Coins;
