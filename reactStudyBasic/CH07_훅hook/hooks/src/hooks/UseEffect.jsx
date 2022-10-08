import React, { useEffect, useState } from "react";
import Timer from "./Timer";

function UseEffect() {
  const [timer, setTimer] = useState(false);

  const handleTimer = (event) => {
    setTimer((current) => !current);
  };
  console.log(timer);

  return (
    <div>
      <button
        onClick={handleTimer}
        style={{
          backgroundColor: timer ? "tomato" : "lightgreen",
        }}
      >
        {timer ? "종료" : "시작"}{" "}
      </button>
      {timer ? <Timer /> : null}
    </div>
  );
}

export default UseEffect;
