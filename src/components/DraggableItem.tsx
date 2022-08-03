import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 2px;
`;
interface IDraggableProps {
  list: string;
  idx: number;
}

function DraggableItem({ list, idx }: IDraggableProps) {
  console.log("앙?");
  return (
    <Draggable key={list} draggableId={list} index={idx}>
      {(magic) => (
        <Card
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
