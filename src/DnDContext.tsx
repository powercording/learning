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

  const onDragEnd = (info: DropResult) => {
    const { destination, source } = info;
    if (!destination) return;
    setDragList((prevValue) => {
      const targetObject = {
        [source.droppableId]: [...prevValue[source.droppableId]],
        [destination.droppableId]: [...prevValue[destination.droppableId]],
      };

      const target = [...targetObject[source.droppableId]][source.index];
      const targetArray = targetObject[source.droppableId];
      const destinationArray = targetObject[destination.droppableId];

      targetArray.splice(source.index, 1);
      console.log(targetArray);

      destinationArray.splice(destination?.index, 0, target);
      console.log(destinationArray);

      return {
        ...prevValue,
        [source.droppableId]: targetArray,
        [destination.droppableId]: destinationArray,
      };
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
