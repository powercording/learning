import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";

const data = {
  items: [
    { id: "0", title: "리액트 컴포넌트 만들기 연습", done: true },
    { id: "1", title: "리액트 훅 useState 연습", done: false },
    { id: "2", title: "리액트 훅 useEffect 연습", done: true },
    { id: "3", title: "리액트 훅 useRef 연습", done: true },
    { id: "4", title: "리액트 훅 useMemo 연습", done: false },
    { id: "5", title: "리액트 훅 useReducer 연습", done: true },
  ],
};

function App() {
  const [items, setItems] = useState(data.items);
  //생성
  const addItem = (item) => {
    item.id = "ID-" + items.length;
    item.done = false;
    setItems([...items, item]);
  };
  //수정
  const editItem = (item) => {
    setItems([...items]);
  };
  //삭제
  const deleteItem = (item) => {
    const newItem = items.filter((todo) => todo.id !== item.id);
    setItems(newItem);
  };

  return (
    <div className="App">
      <Container maxWidth="md">
        <AddToDo addItem={addItem} />
        <Paper style={{ margin: 16 }}>
          <List>
            {items.map((element) => {
              return (
                <ToDo
                  key={element.id}
                  item={element}
                  editItem={editItem}
                  deleteItem={deleteItem}
                ></ToDo>
              );
            })}
          </List>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
