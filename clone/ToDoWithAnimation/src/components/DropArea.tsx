import { Droppable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import DraggableItem from "./DraggableItem";
import TodoInput from "./TodoInput";
import { ITodoTwo } from "./atoms";

const Board = styled.div`
  background-color: #f7f1e3;
  padding: 20px 10px;
  border-radius: 8px;
  min-height: 400px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h2`
  text-align: center;
  margin-bottom: 15px;
  color: black;
`;
interface IDropAreaProps {
  dragList: ITodoTwo[];
  boardId: string;
}

interface IAreaProps {
  draggingFromThisWith: boolean;
  isDraggingOver: boolean;
}
const Area = styled.div<IAreaProps>`
  background-color: ${(props) =>
    props.isDraggingOver
      ? "#fff788dc"
      : props.draggingFromThisWith
      ? "#584e3270"
      : "#f7f1e3"};
  border-radius: 5px;
  flex-grow: 1;
  transition: background-color 0.3s ease-in-out;
`;

function DropArea({ dragList, boardId }: IDropAreaProps) {
  return (
    <Board>
      <Title>{boardId.toLocaleUpperCase()}</Title>
      <TodoInput boardId={boardId} />
      <Droppable droppableId={boardId}>
        {(magic, snapshot) => (
          <Area
            isDraggingOver={snapshot.isDraggingOver}
            draggingFromThisWith={Boolean(snapshot.draggingFromThisWith)}
            ref={magic.innerRef}
            {...magic.droppableProps}
          >
            {dragList?.map((list, idx) => (
              <DraggableItem
                key={list.id}
                list={list.text}
                idx={idx}
                toDoId={list.id}
              />
            ))}
            {magic.placeholder}
          </Area>
        )}
      </Droppable>
    </Board>
  );
}

export default DropArea;
