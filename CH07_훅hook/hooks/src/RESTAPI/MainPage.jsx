import React from "react";
import styled, { keyframes } from "styled-components";
import { Navigate } from "react-router-dom";

const disappear = keyframes`
from {
  transform : display(none)
}
to {}
`;

const Mybutton = styled.div`
  padding: 20px;
  background-color: aliceblue;
  border-radius: 60%;
`;
const redirect = () => {
  return <Navigate to="/"></Navigate>;
};

function MainPage() {
  return (
    <>
      <Mybutton>MainPage</Mybutton>;
      <button onClick={redirect}>리다이랙트</button>
    </>
  );
}

export default MainPage;
