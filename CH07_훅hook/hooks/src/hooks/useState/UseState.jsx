import React from "react";
import { useState } from "react";

function UseState() {
  const [number, setNumbr] = useState(0);

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => setNumbr((current) => current + 1)}>
        Number UP!
      </button>
    </div>
  );
}

export default UseState;
