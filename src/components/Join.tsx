import styled from "styled-components";
import JoinHeader from "./elements/JoinHeader";
import Jointext from "./elements/JoinText";
import img from "C:\\Users\\adoim\\commerce\\src\\img\\backImage.jpg";
const BackGround = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const Container = styled.div`
  display: grid;
  grid-template: "empty form text" 1fr / 2fr 2fr 6fr;
  height: 60%;
  width: 100%;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EmptyContainer = styled.div`
  grid-area: empty;
`;
const LoremContainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-width: 80%;
  overflow: auto;
  color: whitesmoke;
  height: 100%;
`;

const InputConatainer = styled.div`
  display: flex;
  grid-area: form;
  flex-shrink: 0.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  overflow: auto;
`;
const IdInput = styled.input`
  margin-top: 30px;
  height: 40px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.themeFocusedColor};
  transition: color 0.4s;
  :focus {
    outline: none;
    color: ${(props) => props.theme.accentColor};
  }
`;
const Btn = styled.button`
  background-color: ${(props) => props.theme.accentColor};
  width: 60%;
  height: 40px;
  border: none;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 0px grey;
  margin: 20px;
  color: white;
  transition: background-color 0.3s;
  :hover {
    background-color: white;
    color: ${(props) => props.theme.accentColor};
  }
`;

function Join() {
  return (
    <BackGround>
      <Container>
        <EmptyContainer></EmptyContainer>
        <InputConatainer>
          <FormContainer>
            <IdInput placeholder="id" />
            <IdInput placeholder="email" />
            <IdInput placeholder="name" />
            <IdInput placeholder="pw" />
            <IdInput placeholder="pw-repeat" />
            <Btn>가입하기</Btn>
          </FormContainer>
        </InputConatainer>
        <LoremContainer>
          <TextContainer>
            <JoinHeader />
            <Jointext />
            <label>
              <input type="checkbox" />
              동의합니다.
            </label>
          </TextContainer>
        </LoremContainer>
      </Container>
    </BackGround>
  );
}
export default Join;
