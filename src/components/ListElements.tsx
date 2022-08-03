import React from "react";
import styled from "styled-components";

const List = styled.div`
  background-color: #ccc;
  color: #333;
  width: 25%;
  height: 10%;
`;

function ListElements({ dragDropList }: any) {
  return (
    <>
      {dragDropList.map((todo: any) => {
        <List>{todo}</List>;
      })}
    </>
  );
}

export default ListElements;
