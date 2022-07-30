<<<<<<< HEAD
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
=======
import { useRef } from "react";
import { Alert, Container, Row } from "reactstrap";

function Message({ message }: any) {
  const alertRef = useRef(null);
  return (
    <Container>
      <Row md="2">
        <Alert className="mx-auto">{message}</Alert>
>>>>>>> 05e7410226f0d5baaa51c885df095facde47bbf5
      </Row>
    </Container>
  );
}

export default Message;
