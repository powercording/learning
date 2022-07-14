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
  return (
    <Container>
      <FormContainer>
        <IdInput placeholder="ID"></IdInput>
        <IdInput placeholder="PW"></IdInput>
        <Span>
          <Link to={`/user`}>login</Link>
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
