import React, { useCallback, useMemo, useState } from "react";
import Box from "./Box";

function UseCallBack03() {
  const [size, setSize] = useState(100);
  const [isDark, setIsDark] = useState(false);

  const createBoxStyle = useMemo(() => {
    return {
      backgroundColor: "teal",
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <div
      style={{
        backgroundColor: isDark ? "#333" : "tomato",
      }}
    >
      <button
        className="btn btn-warning"
        onClick={() => {
          setIsDark((prev) => !prev);
        }}
      >
        ChangeTheme!
      </button>
      <button className="btn btn-info">Click me!</button>
      <input
        className="form-control w-auto"
        type="number"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      />

      <br />
      <Box createBoxStyle={createBoxStyle} />
    </div>
  );
}

export default UseCallBack03;
