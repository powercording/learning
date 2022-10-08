import { ReactElement } from "react";
import styled from "styled-components";

export interface ICenterProps {
  children: any;
}
const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerContainer = styled.div`
  width: 40%;
  background-color: whitesmoke;
`;

const CenterPiece: React.FunctionComponent<ICenterProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <InnerContainer>{children}</InnerContainer>
    </Container>
  );
};

export default CenterPiece;
