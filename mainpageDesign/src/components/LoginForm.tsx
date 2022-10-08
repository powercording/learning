import axios from "axios";
import Cookies from "js-cookie";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`;

const IdInput = styled.input`
  background-color: black;
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  color: ${(props) => props.theme.themeFocusedColor};
  transition: color 0.4s;
  :focus {
    outline: none;
    color: ${(props) => props.theme.accentColor};
  }
`;
const Span = styled.span`
  padding: 10px;
  text-align: center;
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.themeFocusedColor};
  transition: color 0.2s;
  :hover {
    text-shadow: 0.1px 0.1px 1px white;
  }
`;

function LoginForm() {
  const ADDRESS = "http://localhost:8080/";
  const [isLogin, setLogin] = useState(false);
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");

  const tryLogin = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post(ADDRESS + "user/authenticate", {
        loginId: loginId,
        password: password,
      })
      .then((response) => {
        if (response.status === 200) {
          Cookies.set("loginId", response.data.loginId);
          Cookies.set("isLogin", "true");
          setLogin(true);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <FormContainer method="POST">
        <IdInput
          placeholder="ID"
          value={loginId}
          onChange={(event) => setLoginId(event.target.value)}
        ></IdInput>
        <IdInput
          placeholder="PW"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></IdInput>
        <Span>
          <button onClick={tryLogin}>로그인</button>
        </Span>
      </FormContainer>
      <FormContainer>
        <Span>
          <h1>아직 회원이 아니신가요?</h1>
        </Span>
        <Link to={`/Join`}>
          <Span>
            <H1>회원가입</H1>
          </Span>
        </Link>
      </FormContainer>
    </Container>
  );
}

export default LoginForm;
