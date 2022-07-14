import styled from "styled-components";
const Container = styled.div``;
const IdInput = styled.input`
  margin-top: 30px;
  height: 40px;

  /* border-bottom: 1px solid rgba(255, 255, 255, 0.7); */
  color: ${(props) => props.theme.themeFocusedColor};
  transition: color 0.4s;
  :focus {
    outline: none;
    color: ${(props) => props.theme.accentColor};
  }
`;

function Join() {
  return (
    <div>
      <IdInput />
      <IdInput />
      <IdInput />
      <IdInput />
      <IdInput />
    </div>
  );
}
export default Join;
