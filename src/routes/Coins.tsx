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
  height: 100vh;
  grid-area: NameList;
  box-shadow: 0px 0px 0px 3px rgba(0, 0, 0, 0.2);
`;

const ListWrapper = styled.ul`
  margin-top: 10px;
`;
const ListOfCoins = styled.li`
  margin: 4px;
  padding: 4px;
  max-width: 3vw;
  min-width: 50px;
  border-bottom: 1px solid rgba(226, 213, 213, 0.4);
`;
const Coin = styled.span``;
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

const testData = [
  {
    result: "success",
    error_code: "0",
    server_time: "1416895635000",
    markets: [
      {
        quote_currency: "KRW",
        target_currency: "BTC",
        price_unit: "100.0",
        qty_unit: "0.0001",
        max_order_amount: "1000000000.0",
        max_price: "1000000000000.0",
        max_qty: "100000000.0",
        min_order_amount: "0.0001",
        min_price: "0.0001",
        min_qty: "0.00000001",
        order_book_units: [],
        maintenance_status: 0,
        trade_status: 1,
      },
      {
        quote_currency: "KRW",
        target_currency: "ETH",
        price_unit: "10000.0",
        qty_unit: "0.0001",
        max_order_amount: "1000000000.0",
        max_price: "100000000.0",
        max_qty: "100.0",
        min_order_amount: "500.0",
        min_price: "0.0001",
        min_qty: "0.00000001",
        order_book_units: ["50000.0", "100000.0"],
        maintenance_status: 0,
        trade_status: 1,
        order_types: ["limit", "market"],
      },
    ],
  },
];

function Coins() {
  const [coinDate, setCoindata] = useState("");
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://api.coinone.co.kr/public/v2/markets/KRW/BTC", {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <NameWrapper>
        <Header>coins</Header>
        <CoinName>names</CoinName>
        <ListWrapper>
          {testData[0].markets.map((coinId) => (
            <Link to={`/${coinId.target_currency}`}>
              <ListOfCoins>
                <Coin key={coinId.target_currency}>
                  {coinId.target_currency}
                </Coin>
              </ListOfCoins>
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
