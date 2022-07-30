import { useRecoilValue } from "recoil";
import { toDoState } from "./components/atoms";
import CreateToDo from "./components/CreateToDo";
import ToDo from "./components/ToDo";

function ToDoList() {
  const toDos = useRecoilValue(toDoState);
  return (
    <>
      <h1>SANGDON TODO LIST</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}
export default ToDoList;
