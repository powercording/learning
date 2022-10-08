import axios from "axios";
import Cookies from "js-cookie";
import { eventNames } from "process";
import { useState } from "react";
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
  height: 70%;
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
  color: ${(props) => props.theme.themeFocusedColor};
  transition: color 0.4s;
  :focus {
    outline: none;
    color: ${(props) => props.theme.accentColor};
  }
`;
const InPutDiv = styled.div`
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  width: 100%;
`;
const Btn2 = styled.button`
  background-color: white;
  border: none;
  color: ${(props) => props.theme.themeFocusedColor};
  :hover {
    cursor: pointer;
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
const SellerBtn = styled.div`
  width: 130px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Join() {
  const ADDRESS = "http://localhost:8080/";
  const [loginId, setLoginId] = useState("");
  const [email, setemail] = useState("");
  const [nickname, setname] = useState("");
  const [password, setpassword] = useState("");
  const [repeatedPassword, setRepeat] = useState("");
  const [isChecked, setCheckBox] = useState(false);

  function checkBox() {
    setCheckBox((current) => !current);
  }
  const send = () => {
    axios
      .post(ADDRESS + "user/join", {
        loginId: loginId,
        email: email,
        nickname: nickname,
        password: password,
        seller: isChecked,
      })
      .then((response) => {
        if (response.status === 200) {
          if (response.data.id === 0) {
            alert("이미 존재하는 아이디 입니다.");
          } else {
            Cookies.set("loginId", response.data.loginId);
            console.log(response.data);
            alert("가입을 환영합니다");
          }
        }
      })
      .catch((err) => console.log(err));
  };
  const checkId = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    axios
      .post(ADDRESS + "user/join/login_id_check", {
        loginId: loginId,
      })
      .then((response) => {
        if (response.data === true) {
          alert("이미 존재하는 아이디 입니다.");
        } else {
          alert("사용 가능한 아이디입니다.");
        }
      })
      .catch((err) => console.log(err));
  };
  const checkEmail = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    axios
      .post(ADDRESS + "user/join/login_email_check", {
        email: email,
      })
      .then((response) => {
        if (response.data === true) {
          alert("해당 이메일 주소로 가입된 회원이존재합니다.");
        } else {
          alert("사용할수 있는 메일입니다.");
        }
      })
      .catch((err) => console.log(err));
  };
  const checkNickname = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    axios
      .post(ADDRESS + "user/join/login_nickname_check", {
        nickname: nickname,
      })
      .then((response) => {
        if (response.data === true) {
          alert("중복되는 이름이 있습니다. 다른 이름을 입력해주세요.");
        } else {
          alert("사용할수 있는 이름입니다.");
        }
      })
      .catch((err) => console.log(err));
  };
  const getsome = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    axios.get(ADDRESS + "user/get").then((response) => console.log(response));
  };

  return (
    <BackGround>
      <Container>
        <EmptyContainer></EmptyContainer>
        <InputConatainer>
          <FormContainer>
            <InPutDiv>
              <IdInput
                placeholder="id"
                onChange={(event) => setLoginId(event.target.value)}
                value={loginId}
              />
              <Btn2 onClick={(evnet) => checkId(evnet)}>중복 확인</Btn2>
            </InPutDiv>
            <InPutDiv>
              <IdInput
                placeholder="email"
                onChange={(event) => setemail(event.target.value)}
                value={email}
              />
              <Btn2 onClick={(event) => checkEmail(event)}>중복 확인</Btn2>
            </InPutDiv>
            <InPutDiv>
              <IdInput
                placeholder="nickname"
                onChange={(event) => setname(event.target.value)}
                value={nickname}
              />
              <Btn2 onClick={(event) => checkNickname(event)}>중복 확인</Btn2>
            </InPutDiv>
            <InPutDiv>
              <IdInput
                placeholder="pw"
                onChange={(event) => setpassword(event.target.value)}
                value={password}
              />
            </InPutDiv>
            <InPutDiv>
              <IdInput
                placeholder="pw-repeat"
                onChange={(event) => setRepeat(event.target.value)}
                value={repeatedPassword}
              />
            </InPutDiv>
          </FormContainer>
          <Btn onClick={send}>가입하기</Btn>
        </InputConatainer>
        <LoremContainer>
          <TextContainer>
            <JoinHeader />
            <Jointext />
            <label>
              <input type="checkbox" />
              동의합니다.
            </label>
            <SellerBtn
              onClick={checkBox}
              style={{
                color: isChecked ? "white" : "lightgrey",
                backgroundColor: isChecked
                  ? "rgba(106, 176, 76,0.9)"
                  : "whitesmoke",
              }}
            >
              {isChecked ? <p>사업자입니다✅</p> : <p>사업자입니다</p>}
            </SellerBtn>
          </TextContainer>
        </LoremContainer>
      </Container>
      <button onClick={getsome}>112 가져와</button>
    </BackGround>
  );
}
export default Join;
