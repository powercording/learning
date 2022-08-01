import React, { useState } from "react";
import Child from "./Child";

function Parent() {
  const [parentAge, setParentAge] = useState(0);
  const [chiledAge, setChildAge] = useState(0);

  const increaseParentsAge = () => {
    setParentAge((current) => current + 1);
  };
  const increaseChildAge = () => {
    setChildAge((current) => current + 1);
  };
  console.log("부모 컴포넌트 랜더링...");

  return (
    <div className={"container border border"}>
      <div className={"alert alert-info mt-3"}>
        <h5>
          <i className="fa-solid fa-person-breastfeeding"></i>
          <span> age : {parentAge}</span>
        </h5>
      </div>
      <div className={"mb-3 d-flex justify-content-center"}>
        <button className={"btn btn-secondary "} onClick={increaseParentsAge}>
          부모나이 증가
        </button>
        <button className={"btn btn-primary "} onClick={increaseChildAge}>
          자식나이 증가
        </button>
      </div>
      <Child name={"우영우"} age={chiledAge} />
    </div>
  );
}

export default Parent;
