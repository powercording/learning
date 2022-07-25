import React from "react";
import Book from "./Book";

function Memoo() {
  return (
    <div>
      <Book title="파이썬이 제일 쉬웠어요" page="100" />;
      <Book title="리액트란?" page="500" />;
      <Book title="자바의 정석" page="300" />;
    </div>
  );
}

export default Memoo;
