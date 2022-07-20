import { ReactElement } from "react";
import styled from "styled-components";
import CenterPiece from "../CenterPiece";

export interface ILoadingProps {
  dotType?: string;
  Children?: any;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading: React.FunctionComponent<ILoadingProps> = (props) => {
  const { Children, dotType } = props;

  return (
    <Container>
      <div>
        <div className={dotType}></div>
        {Children}
      </div>
    </Container>
  );
};

Loading.defaultProps = {
  dotType: "dot-bricks",
};

export interface ILoadingComponentProps {
  card?: boolean;
  dotType?: string;
  children?: any;
}

export const LoadingComponent: React.FunctionComponent<
  ILoadingComponentProps
> = (props) => {
  const { card, children, dotType } = props;

  if (card) {
    return (
      <CenterPiece>
        <Container>
          <Loading dotType={dotType} />
          {children}
        </Container>
      </CenterPiece>
    );
  }

  return (
    <div>
      <Loading dotType={dotType}></Loading>
      {children}
    </div>
  );
};

LoadingComponent.defaultProps = {
  card: true,
  dotType: "dot-bricks",
};

export default LoadingComponent;
