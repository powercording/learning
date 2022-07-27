import React, { ReactNode, useState } from "react";
type PropsWithChildren<P> = P & { children?: ReactNode };
type Imsg = {
  error: {
    message: string;
  };
};

import { Alert, Container, Row } from "reactstrap";

function Message() {
  return (
    <Container>
      <Row md="2">
        <Alert
          color="danger"
          className="mx-auto"
          dismiss={function noRefCheck() {}}
        >
          {message.error.message}
        </Alert>
      </Row>
    </Container>
  );
}

export default Message;
