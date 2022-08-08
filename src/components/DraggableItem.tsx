import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 1px;
  border: ${(props) => (props.isDragging ? "1px solid skyblue" : "")};
  box-shadow: ${(props) =>
    props.isDragging ? "0.5px 0.5px 4px 1px grey" : ""};
  width: 100%;
`;
interface IDraggableProps {
  toDoId: number;
  list: string;
  idx: number;
}

function DraggableItem({ list, idx, toDoId }: IDraggableProps) {
  console.log("앙?");
  return (
    <Draggable key={list} draggableId={toDoId + ""} index={idx}>
      {(magic, snapshot) => (
        <Card
          isDragging={snapshot.isDragging}
          ref={magic.innerRef}
          {...magic.dragHandleProps}
          {...magic.draggableProps}
        >
          {list}
        </Card>
      )}
    </Draggable>
  );
}

export default React.memo(DraggableItem);
