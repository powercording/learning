import { useSetRecoilState } from "recoil";
import { Categories, ITodo, toDoState } from "./atoms";

function ToDo({ list, category, id }: ITodo) {
  const setTodos = useSetRecoilState(toDoState);

  const onClick = (newCategory: ITodo["category"]) => {
    setTodos((prev) => {
      const targetLocation = prev.findIndex((item) => {
        return item.id === id;
      });
      const newTodo = { list, id, category: newCategory };
      return [
        ...prev.slice(0, targetLocation),
        newTodo,
        ...prev.slice(targetLocation + 1),
      ];
    });
  };
  return (
    <li>
      {list}
      {category !== Categories.TO_DO && (
        <button
          className="btn btn-outline-info"
          onClick={() => onClick(Categories.TO_DO)}
        >
          {Categories.TO_DO}
        </button>
      )}
      {category !== Categories.DOING && (
        <button
          className="btn btn-outline-primary"
          onClick={() => onClick(Categories.DOING)}
        >
          {Categories.DOING}
        </button>
      )}
      {category !== Categories.DONE && (
        <button
          className="btn btn-info"
          onClick={() => onClick(Categories.DONE)}
        >
          {Categories.DONE }
        </button>
      )}
    </li>
  );
}
export default ToDo;
