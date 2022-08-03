import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dragDropState } from "./components/atoms";
import DropArea from "./components/DropArea";

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
  gap: 10px;
`;
function DnDContext() {
  const [dragList, setDragList] = useRecoilState(dragDropState);

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    setDragList((prevValue) => {
      if (destination?.droppableId === source.droppableId) {
        const fromValue = [...prevValue[source.droppableId]];
        fromValue.splice(source.index, 1);
        fromValue.splice(destination.index, 0, draggableId);

        return {
          ...prevValue,
          [source.droppableId]: fromValue,
        };
      }

      if (destination?.droppableId != source.droppableId) {
        const fromValue = [...prevValue[source.droppableId]];
        fromValue.splice(source.index, 1);

        const toValue = [...prevValue[destination.droppableId]];
        toValue.splice(destination?.index, 0, draggableId);

        return {
          ...prevValue,
          [source.droppableId]: fromValue,
          [destination.droppableId]: toValue,
        };
      } else return prevValue;
    });
  };
  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Boards>
          {Object.keys(dragList).map((boardId) => (
            <DropArea
              key={boardId}
              boardId={boardId}
              dragList={dragList[boardId]}
            />
          ))}
        </Boards>
      </DragDropContext>
    </Wrapper>
  );
}

export default DnDContext;
