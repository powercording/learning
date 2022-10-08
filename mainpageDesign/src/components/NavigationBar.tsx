import styled from "styled-components";

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
  color: whitesmoke;
  margin: 15px;
`;

function NavigationBar() {
  return (
    <Nav>
      <InsideBox>
        <Span>쇼핑</Span>
        <Span>블로그</Span>
        <Span>회원정보</Span>
        <Span>검색</Span>
      </InsideBox>
    </Nav>
  );
}

export default NavigationBar;
