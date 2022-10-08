import React from "react";
import axios from "axios";
import styled from "styled-components";

const List = styled.li`
  background-color: #ccc;
  padding: 15px;
  list-style: none;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function FristREST(props) {
  return (
    <List>
      <span>번호: {props.no}</span>
      <span style={{ alignItems: "left" }}>
        <img
          style={{
            width: 50,
            borderRadius: 25,
          }}
          src={props.thumb}
          alt="d"
        />
      </span>
      <span>{props.title}</span>

      <span>앨범:{props.album}</span>
    </List>
  );
}

export default FristREST;
