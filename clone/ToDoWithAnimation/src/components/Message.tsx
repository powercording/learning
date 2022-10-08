import { useRef } from "react";
import { Alert, Container, Row } from "reactstrap";

function Message({ message }: any) {
  const alertRef = useRef(null);
  return (
    <Container>
      <Row md="2">
        <Alert className="mx-auto">{message}</Alert>
      </Row>
    </Container>
  );
}

export default Message;
