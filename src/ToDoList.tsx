import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, toDoCategory, toDoSelector } from "./components/atoms";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function ToDoList() {
  const todo = useRecoilValue(toDoSelector);
  const [toDoCate, setToDocate] = useRecoilState(toDoCategory);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setToDocate(event.currentTarget.value as Categories);
  };
  return (
    <>
      <h1>SANGDON TODO LIST</h1>
      <select onInput={onInput} value={toDoCate}>
        <option value={Categories.TO_DO}>TODO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <hr />
      <CreateToDo />
      <h2>{toDoCate}</h2>
      <hr />
      {todo?.map((item) => (
        <ToDo key={item.id} {...item} />
      ))}
    </>
  );
}
export default ToDoList;
