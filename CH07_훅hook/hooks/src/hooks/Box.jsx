import React, { useEffect, useState } from "react";

function Box({ createBoxStyle }) {
  const [style, setStyle] = useState();
  useEffect(() => {
    console.log("boxSizing:", createBoxStyle.width);
    setStyle(createBoxStyle);
  }, [createBoxStyle]);
  return <div style={style}></div>;
}

export default Box;
