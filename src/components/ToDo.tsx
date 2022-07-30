import { useSetRecoilState } from "recoil";
import { ITodo, toDoState } from "./atoms";

function ToDo({ list, category, id }: ITodo) {
  const setTodos = useSetRecoilState(toDoState);
  const onClick = (newCategory: ITodo["category"]) => {
    setTodos((prev) => {
      const targetLocation = prev.findIndex((item) => {
        return item.id === id;
      });
      const preTodos = prev.slice(0, targetLocation);
      const targetTodo = prev[targetLocation];
      console.log(targetTodo);
      const newTodo = { list, id, category: newCategory };
      console.log(newTodo);
      const afterTodos = prev.slice(targetLocation + 1);
      return [...preTodos];
    });
  };
  return (
    <li>
      {list}
      {category !== "TO_DO" && (
        <button
          className="btn btn-outline-info"
          onClick={() => onClick("TO_DO")}
        >
          TO-DO
        </button>
      )}
      {category !== "DONE" && (
        <button
          className="btn btn-outline-primary"
          onClick={() => onClick("DONE")}
        >
          DONE
        </button>
      )}
      {category !== "DOING" && (
        <button className="btn btn-info" onClick={() => onClick("DOING")}>
          DOING
        </button>
      )}
    </li>
  );
}
export default ToDo;
