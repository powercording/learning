import React, { Children, ReactNode, useState } from "react";



import { Alert, Container, Row } from "reactstrap";

function Message() {
  const {Children}  = props
  return (
    <Container>
      <Row md="2">
        <Alert
          color="danger"
          className="mx-auto"
          dismiss={function noRefCheck() {}}
        >
          {Children}
        </Alert>
      </Row>
    </Container>
  );
}

export default Message;
