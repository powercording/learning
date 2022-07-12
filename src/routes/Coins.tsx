import styled from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.focusedColor};
`;
function Coins() {
  return <Title>coins</Title>;
}
export default Coins;
