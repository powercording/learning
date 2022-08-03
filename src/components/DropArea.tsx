import { Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { dragDropState } from "./atoms";
import DraggableItem from "./DraggableItem";

const Board = styled.div`
  background-color: #ccc;
  padding: 20px 10px;
  border-radius: 8px;
  min-height: 400px;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 10px;
  color: black;
`;
interface IDropAreaProps {
  dragList: string[];
  boardId: string;
}

function DropArea({ dragList, boardId }: IDropAreaProps) {
  return (
    <Board>
      <Title>{boardId.toLocaleUpperCase()}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <div ref={magic.innerRef} {...magic.droppableProps}>
            {dragList.map((list, idx) => (
              <DraggableItem key={list} list={list} idx={idx} />
            ))}
            {magic.placeholder}
          </div>
        )}
      </Droppable>
    </Board>
  );
}

export default DropArea;
