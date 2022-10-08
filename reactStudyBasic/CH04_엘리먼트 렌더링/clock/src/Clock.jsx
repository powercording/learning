import { useState } from "react";

function Clock() {
  let now = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  console.log("머야");

  return (
    <>
      {setInterval(() => {
        time;
      }, 1000)}
    </>
  );
}

export default Clock;
