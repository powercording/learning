import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { dragDropState, IDndState } from "./components/atoms";
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
      // const toValue = JSON.parse(JSON.stringify(prevValue));
      // toValue[source.droppableId].splice(source.index, 1);
      // toValue[destination.droppableId].splice(
      //   destination.index,
      //   0,
      //   draggableId
      // );

      // const fromValue: IDndState = {};
      // Object.keys(prevValue).map((catego) => {
      //   fromValue[catego] = [...prevValue[catego]];
      // });
      // fromValue[source.droppableId].splice(source.index, 1);
      // fromValue[destination.droppableId].splice(
      //   destination.index,
      //   0,
      //   draggableId
      // );

      const targetObject = {
        [source.droppableId]: [...prevValue[source.droppableId]],
        [destination.droppableId]: [...prevValue[destination.droppableId]],
      };

      targetObject[source.droppableId].splice(source.index, 1);
      targetObject[destination.droppableId].splice(
        destination.index,
        0,
        draggableId
      );

      return {
        ...prevValue,
        ...targetObject,
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
