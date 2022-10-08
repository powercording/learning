/**
 * [React.memo 최적화]
 * 랜더링이 되어야 할 상황에 놓일때마다
 * props check 를 통해서 자신이 받는 props에 변화가 있는지 없는지 확인하여
 * 있다면 랜더링 없다면 기존결과를 재사용 한다.
 */

import React, { memo, useState } from "react";

function Child({ name, age }) {
  const [customAge, setCustomAge] = useState(0);

  const increaseCustomAge = () => {
    setCustomAge((current) => current + 1);
  };

  console.log("자식 컴포넌트 랜더링...");
  return (
    <div className={"alert alert-success"}>
      <h5>
        <i className="fa-solid fa-children"></i>
        <div className="d-flex flex-column">
          <span> name : {name}</span> <span> age : {age}</span>
        </div>
      </h5>
      <div>
        <h5>customAge = {customAge}</h5>
      </div>
      <button onClick={increaseCustomAge} className={"btn  btn-danger"}>
        자식컴포넌트 내부버튼
      </button>
    </div>
  );
}

export default memo(Child);
