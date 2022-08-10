import {
  Checkbox,
  IconButton,
  InputBase,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import { DeleteOutline } from "@mui/icons-material";
import React from "react";
import { useState } from "react";

function ToDo(props) {
  const [item, setItem] = useState(props.item);
  const [readOnly, setReadOnly] = useState(true);

  const editItem = props.editItem;
  const deleteItem = props.deleteItem;

  //수정

  //삭제
  const onClick = () => {
    deleteItem(item);
  };

  //체크박스
  const onChange = (e) => {
    item.done = e.target.checked;
    editItem(item);
  };
  const switchReadOnly = () => {
    setReadOnly(false);
  };
  const editTodo = (e) => {
    setItem({ ...item, title: e.target.value });
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      setReadOnly(true);
      editItem(item);
    }
  };
  return (
    <ListItem>
      <Checkbox checked={item.done} onChange={onChange} />

      <ListItemText>
        <InputBase
          inputProps={{ readOnly: readOnly }}
          onClick={switchReadOnly}
          onChange={editTodo}
          onKeyDown={onKeyDown}
          type="text"
          id={item.id}
          name={item.name}
          value={item.title}
          multiline={true}
          fullWidth
          spellCheck={false}
        />
      </ListItemText>

      <ListItemSecondaryAction>
        <IconButton onClick={onClick}>
          <DeleteOutline />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default ToDo;
