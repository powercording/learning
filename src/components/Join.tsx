import styled from "styled-components";
import img from "C:/Users/상돈/Desktop/commerce/src/img/backImage.jpg";

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 170px;
  width: 100%;
`;
const EmptyContainer = styled.div`
  display: flex;
  height: 60%;
  flex-grow: 1;
  flex-shrink: 1;
`;
const LoremContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  height: 50%;
  flex-grow: 0.6;
  flex-shrink: 1;
  overflow: auto;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
`;
const InputConatainer = styled.div`
  display: flex;
  width: 20%;
  height: 50%;
  min-width: 170px;
  flex-shrink: 0.5;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;
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

function Join() {
  return (
    <Container>
      <EmptyContainer>ds</EmptyContainer>
      <InputConatainer>
        <FormContainer>
          <IdInput placeholder="id" />
          <IdInput placeholder="email" />
          <IdInput placeholder="name" />
          <IdInput placeholder="pw" />
          <IdInput placeholder="pw-repeat" />
        </FormContainer>
      </InputConatainer>
      <LoremContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          tempus porttitor elementum. Nulla eget tellus metus. Quisque et erat
          enim. Duis iaculis diam ultricies, placerat magna viverra, ultricies
          sem. Suspendisse potenti. Etiam porttitor vulputate dignissim. Quisque
          vulputate turpis at est iaculis ultricies. Aliquam erat volutpat. Nam
          at imperdiet neque. Vestibulum nec erat sagittis, hendrerit eros a,
          pulvinar mi. Quisque nisi leo, lacinia ut laoreet vitae, vulputate
          quis mauris. Proin accumsan consequat nisi sed venenatis. Nulla
          facilisi. Aliquam euismod eget massa sed faucibus. Aliquam
          sollicitudin semper diam vitae tincidunt. Fusce neque augue, molestie
          posuere auctor ac, tincidunt ac mauris. Nulla facilisi. Pellentesque
          risus metus, tincidunt ut est vestibulum, fermentum imperdiet lacus.
          Aliquam erat volutpat. Sed facilisis rhoncus augue et aliquet.
          Phasellus non lectus sit amet urna suscipit bibendum eu vitae tellus.
          Mauris tristique ante ac velit tempus mollis tempor sodales dolor.
          Vivamus vel tristique ipsum. Quisque accumsan libero et dapibus
          lacinia. Fusce ornare lectus nec commodo congue. Nulla aliquam dapibus
          nulla ut porta. Mauris maximus metus fringilla leo fermentum, vel
          accumsan nulla pretium. Fusce nec blandit dolor, ultrices dapibus
          orci. Aliquam sed purus metus. Fusce maximus tellus sed odio ornare,
          sit amet fringilla tellus ultricies.
        </p>
      </LoremContainer>
    </Container>
  );
}
export default Join;
