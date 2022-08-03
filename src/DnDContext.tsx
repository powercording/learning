import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { dragDropState } from "./components/atoms";
import DropArea from "./components/DropArea";

function DnDContext() {
  const [dragList, setDragList] = useRecoilState(dragDropState);
  // const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
  //   if (!destination) return;
  //   setDragList((prevList) => {
  //     const newList = [...prevList];
  //     newList.splice(source.index, 1);
  //     newList.splice(destination?.index, 0, draggableId);
  //     return [...newList];
  //   });
  // };
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;
    setDragList((prevList) => {
      const newList = [...prevList];
      newList.splice(source.index, 1);
      return [
        ...newList.slice(0, destination?.index),
        draggableId,
        ...newList.slice(destination?.index),
      ];
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <DropArea />
      </div>
    </DragDropContext>
  );
}

export default DnDContext;
