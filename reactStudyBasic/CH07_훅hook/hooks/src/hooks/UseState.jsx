import React from "react";
import { useState } from "react";
import { Button } from "reactstrap";
function UseState() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Button
        onClick={() => {
          setNumber((current) => current + 1);
          if (number >= 23) {
            setNumber(0);
          }
        }}
      >
        클릭
      </Button>
      <h1>{number}</h1>
    </div>
  );
}

export default UseState;
