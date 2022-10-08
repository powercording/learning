import styled from "styled-components";
import LoginForm from "./components/LoginForm";
import { useEffect, useState } from "react";

const title: string = "bitcamp online vagetable shop";
const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template: " windows login" 1fr / 9fr 2fr;
`;
const Title = styled.h1`
  color: white;
  font-size: 3rem;
  padding: 20px;
`;
const Window = styled.div`
  display: flex;
  grid-area: windows;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const LoginBox = styled.div`
  grid-area: login;
  display: flex;
  justify-content: center;
  background-color: black;
`;
const H2 = styled.h2`
  padding: 10px;
`;

function Login() {
  return (
    <Container>
      <Window>
        <Title>{title}</Title>
        <H2>로그인 이후 이용 가능합니다</H2>
      </Window>
      <LoginBox>
        <LoginForm />
      </LoginBox>
    </Container>
  );
}

export default Login;
