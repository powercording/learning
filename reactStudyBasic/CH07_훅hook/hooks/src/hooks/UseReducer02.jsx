import React, { useReducer, useRef, useState } from "react";
const ACTION_TYPES = {
  DEPOSIT: "예금",
  WITHDRAW: "출금",
};
const buttonStyle = {
  width: "120px",
  height: "70px",
  margin: "15px",
  border: "none",
  borderRadius: "15px",
};

const inputStyle = {
  height: "80px",
  width: "500px",
  fontSize: "72px",
};
const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case ACTION_TYPES.DEPOSIT:
      return state + action.payload;
    case ACTION_TYPES.WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

function UseReducer02() {
  const moneyRef = useRef();
  const [money, setMoney] = useState(0);
  const [account, dispatch] = useReducer(reducer, 0);
  return (
    <div className="container">
      <h6>useReducer 은행에 오신것을 환영합니다</h6>
      <h2>잔고 : {account}</h2>
      <div className="d-flex flex-column align-items-center">
        <input
          ref={moneyRef}
          type="number"
          step="1000"
          style={inputStyle}
          // value={money}
          // onChange={(e) => {
          //   setMoney(parseInt(e.target.value));
          // }}
        />
        <div>
          <button
            style={buttonStyle}
            onClick={() =>
              dispatch({
                type: ACTION_TYPES.DEPOSIT,
                payload: parseInt(moneyRef.current.value),
              })
            }
          >
            예금
          </button>
          <button
            style={buttonStyle}
            onClick={() => {
              dispatch({
                type: ACTION_TYPES.WITHDRAW,
                payload: parseInt(moneyRef.current.value),
              });
            }}
          >
            출금
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseReducer02;
