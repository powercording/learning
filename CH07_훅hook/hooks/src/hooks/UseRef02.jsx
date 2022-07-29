import React, { useRef, useState } from "react";

function UseRef02() {
  const [count, setCount] = useState(0);
  const refCount = useRef(0);

  const increaseCountState = () => {
    setCount((prev) => prev + 1);
  };
  const increaseCountRef = () => {
    refCount.current++;
  };

  return (
    <div className={"container"}>
      <h3>State : {count}</h3>
      <div>Ref {refCount.current}</div>
      <button className="btn btn-info mb-2" onClick={increaseCountState}>
        State
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
      <button className="btn btn-success" onClick={increaseCountRef}>
        Ref
        <i className="fa-solid fa-arrow-up-from-bracket"></i>
      </button>
    </div>
  );
}

export default UseRef02;
