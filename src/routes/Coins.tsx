import styled from "styled-components";

const Container = styled.div`
  display: grid;
  /* grid-template: ; */
`;
const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const CoinWrapper = styled.div`
  display: flex;
  height: 100vh;
`;
const Header = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 2rem;
  padding: 5px;
`;
const CoinName = styled.h2`
  color: ${(props) => props.theme.focusedColor};
  padding-left: 5px;
`;

function Coins() {
  return (
    <Container>
      <NameWrapper>
        <Header>coins</Header>
        <CoinName>names</CoinName>
      </NameWrapper>
      <CoinWrapper></CoinWrapper>
    </Container>
  );
}
export default Coins;
