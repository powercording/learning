import styled from "styled-components";
export interface INavigationProps {}
const Nav = styled.div`
  width: 100vw;
  height: 5%;
  background-color: none;
  position: absolute;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InsideBox = styled.div`
  display: flex;
  width: 90%;
`;
const Span = styled.div`
  /* color: ${(props) => props.theme.themeFocusedColor}; */
  color: black;
  margin: 15px;
  font-weight: bold;
  /* -webkit-text-stroke: 0.05px white; */
`;

const Navigation: React.FunctionComponent<INavigationProps> = (props) => {
  return (
    <Nav>
      <InsideBox>
        <Span>shop</Span>
        <Span>blog</Span>
        <Span>Myaccount</Span>
        <Span>search</Span>
      </InsideBox>
    </Nav>
  );
};

export default Navigation;
