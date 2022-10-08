import React from "react";

function DateTime() {
  const dd = new Date().toLocaleDateString();
  const tt = new Date().toLocaleTimeString();
  return <div>{dd + "  " + tt}</div>;
}

export default DateTime;
