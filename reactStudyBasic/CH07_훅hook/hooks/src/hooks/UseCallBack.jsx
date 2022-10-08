import React, { useCallback, useEffect, useState } from "react";

/**
 * useCallBack()
 * 값이 아닌 함수를 반환
 * 자바스크립트에서 함수는 객체의 한 종류이다.
 *
 */

function UseCallBack() {
  const [number, setnumber] = useState(0);
  const memo = useCallback(() => {
    console.log(`some fuckntion.numer : ${number}  "이규화는 신이야^~^"`);
  }, []);

  // const someFunction = () => {

  // };

  useEffect(() => {
    console.log("somefunction 이 변이 되었습니다.");
  }, [memo]);

  return (
    <div className={"container"}>
      <input
        className={"form-control"}
        type={"number"}
        value={number}
        onChange={(e) => {
          setnumber(e.target.value);
        }}
      />
      <button className="btn btn-info" onClick={memo}>
        call function
      </button>
    </div>
  );
}

export default UseCallBack;
