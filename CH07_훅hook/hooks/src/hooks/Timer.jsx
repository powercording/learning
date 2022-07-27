import React, { useEffect, useState } from "react";

function Timer() {
  const [test, setTest] = useState();
  useEffect(() => {
    setTest("뿔리언");
    setTest("투루");
  }, []);
  console.log(test);

  return <div></div>;
}

export default Timer;
