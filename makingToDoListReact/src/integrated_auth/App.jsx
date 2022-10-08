import axios from "axios";
import { List, Paper } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import AddToDo from "./AddToDo";
import ToDo from "./ToDo";
import { api_base_url } from "./api-config";
import { RequestToken } from "./api-config";
import { useNavigate } from "react-router-dom";

function App() {
  const [items, setItems] = useState([]);

  //DB에서 TODO 목록 가져오기 (GET 요청)
  useEffect(() => {
    axios
      .get(`${api_base_url}/todo`, {
        headers: {
          Authorization: RequestToken(),
        },
      })
      .then((res) => setItems(res.data.responseList))
      .catch((err) => console.log(err));
  }, []);

  //생성
  const addItem = (item) => {
    axios
      .post(`${api_base_url}/todo`, item, {
        headers: {
          Authorization: RequestToken(),
        },
      })
      .then((res) => setItems(res.data.responseList));
  };
  //수정
  const editItem = (item) => {
    axios
      .put(`${api_base_url}/todo`, item, {
        headers: {
          Authorization: RequestToken(),
        },
      })
      .then((res) => setItems(res.data.responseList));
  };
  //삭제
  const deleteItem = (item) => {
    axios
      .delete(`${api_base_url}/todo`, {data:item, headers: {
        Authorization: RequestToken(),
      }}) 
      .then((res) => setItems(res.data.responseList));
    // .catch((err) => console.log(err));
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
