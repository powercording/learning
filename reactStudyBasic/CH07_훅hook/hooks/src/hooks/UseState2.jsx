import React, { useState } from "react";
import { Button, Col, Container, Input, Row } from "reactstrap";

function UseState2() {
  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handleNames = (e) => {
    setNames((pre) => [input, ...pre]);
    console.log(names);
  };

  return (
    <Container>
      <Row>
        <Col
          xs="6"
          sm="4"
          className="bg-light border"
          placeholder="이름을 입력해주세요"
        >
          <Input type="text" onChange={handleInput} />
          <Button onClick={handleNames}>Click!</Button>
          <textarea
            value={names.toString().split(",").join("\n")}
            className="form-control mt-1"
          ></textarea>
        </Col>
      </Row>
    </Container>
  );
}

export default UseState2;
