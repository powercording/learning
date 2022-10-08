import React from "react";
import styled from "styled-components";

const SmartButton = styled.button`
  color: ${(props) => (props.dark ? "white" : "dark")};
  background-color: ${(props) => (props.dark ? "black" : "white")};
  border: 1px solid crimson;
  padding: 3px;
`;

function MainPage() {
  return (
    <>
      <SmartButton>MainPage</SmartButton>
    </>
  );
}

export default MainPage;
