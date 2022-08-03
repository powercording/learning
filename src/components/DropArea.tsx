import { Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { dragDropState } from "./atoms";
import DraggableItem from "./DraggableItem";

const Wrapper = styled.div`
  display: flex;
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
`;
const Board = styled.div`
  background-color: #ccc;
  padding: 20px 10px;
  border-radius: 8px;
  min-height: 400px;
`;

const Card = styled.div`
  background-color: white;
  color: black;
  border-radius: 3px;
  padding: 5px;
  margin-bottom: 2px;
`;

function DropArea() {
  const dragList = useRecoilValue(dragDropState);

  return (
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">
          {(magic) => (
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {dragList.map((list, idx) => (
                <DraggableItem key={list} list={list} idx={idx} />
              ))}
              {magic.placeholder}
            </Board>
          )}
        </Droppable>
      </Boards>
    </Wrapper>
  );
}

export default DropArea;
