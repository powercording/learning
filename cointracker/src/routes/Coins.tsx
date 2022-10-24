import { useQuery } from "react-query";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { getUpbitCoins } from "./api";

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
  color: ${(props) => props.theme.textColor};
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
interface IRouter {
  toggle: () => void;
  isdark: boolean;
}
type ICoin = {
  market: string;
  korean_name: string;
  english_name: string;
};

function Coins({ toggle, isdark }: IRouter) {
  const { isLoading, data } = useQuery<ICoin[]>("upbitCoins", getUpbitCoins);

  const coinData = data?.slice(0, 100);

  const newArray = coinData?.filter((item) => {
    if (item.market.indexOf("KRW") > -1) {
      return item;
    }
  });

  return (
    <Container>
      <NameWrapper>
        <Header>{isLoading ? "Loading" : <Link to={"/"}>COIN</Link>}</Header>
        <button onClick={toggle}>{isdark ? "Light on!" : "Light off!"}</button>
        <CoinName>name here</CoinName>
        <br />
        <KRWCoins>
          {newArray?.map((eachCoin, index) => (
            <Coin key={index}>
              <Link to={`/cointracker/${eachCoin.market}`}>
                {eachCoin.english_name.toUpperCase()}
              </Link>
            </Coin>
          ))}
        </KRWCoins>
      </NameWrapper>
      <CoinWrapper>
        {isLoading ? <h1>Testing if this text to be seen....</h1> : <Outlet />}
      </CoinWrapper>
    </Container>
  );
}

export default Coins;
