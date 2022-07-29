import React, { useState } from "react";

function Student({ id, name, isHere, dispatcher }) {
  return (
    <div>
      <span
        style={{
          textDecoration: isHere == false ? "line-through" : "none",
          color: isHere == false ? "red" : "black",
          cursor: "pointer",
        }}
        onClick={() => {
          dispatcher({
            type: "update",
            payload: { id },
          });
        }}
      >
        이름{name} / 학번{id} / 출결 : {isHere ? "출석" : "결석"}
      </span>
      <button
        className="btn btn-outline-danger ml-3"
        onClick={() => {
          dispatcher({
            type: "delete",
            payload: { id },
          });
        }}
      >
        삭제
      </button>
    </div>
  );
}

export default Student;
