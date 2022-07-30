import { ITodo } from "./atoms";

function ToDo({ list, category }: ITodo) {
  return (
    <li>
      {list}
      {category !== "TO_DO" && (
        <button className="btn btn-outline-info">TO-DO</button>
      )}
      {category !== "DONE" && (
        <button className="btn btn-outline-primary">DONE</button>
      )}
      {category !== "DOING" && <button className="btn btn-info">DOING</button>}
    </li>
  );
}
export default ToDo;
