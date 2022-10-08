/**
 * Memoization
 * 컴퓨터 최적화를 위해서 사용하는 개념.
 * 동일한 처리를 하는 함수를 반복적으로 처리를 해야한다면?
 * 맨처음 값을 메모리에 저장해서
 * 필요할때마다 중복계산없이 메모리에서 꺼내어 재사용함.
 *
 * useMemo(콜백함수,의존성배열);
 */
import React, { useMemo, useState } from "react";
const hardCalculator = (Number) => {
  let total = 0;
  for (let i = 0; i < 99999999; i++) {
    total += i;
  }
  console.log("복잡한계산");
  return Number + total;
};
const easyCalculator = (number) => {
  console.log("쉬운계산");
};

function UseMemo() {
  const [hardNumber, setHardNumber] = useState(0);
  const [easyNumber, setEasyNumber] = useState(0);

  const hard = useMemo(() => {
    hardCalculator(hardNumber);
  }, [hardNumber]);

  const easy = easyCalculator(easyNumber);

  return (
    <div style={{ border: "1px solid green", padding: "20px" }}>
      <h5 style={{ color: "#999" }}>Hard working</h5>
      <input
        className="form-control"
        type="number"
        value={hardNumber}
        onChange={(e) => setHardNumber(parseInt(e.target.value))}
      />
      <hr />
      <span> ∫∛ ∝^ = {hard}</span>
      <input
        className="form-control"
        type="number"
        value={hardNumber}
        onChange={(e) => setEasyNumber(parseInt(e.target.value))}
      />{" "}
      <hr />
      <span> ∫∛ ∝^ = {easy}</span>
    </div>
  );
}

export default UseMemo;
