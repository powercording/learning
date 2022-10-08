import React from "react";
import { Button, Grid, Paper, TextField } from "@mui/material";
import { useState } from "react";
function AddToDo(props) {
  const [item, setItem] = useState({ title: "" });
  const addItem = props.addItem;

  const onclick = () => {
    addItem(item);
    setItem({ title: "" }); // 입력란 초기화
  };
  const onkeydown = (e) => {
    if (e.key === "Enter") {
      onclick();
    }
  };

  return (
    <Paper style={{ margin: 16, padding: 30 }}>
      <Grid container>
        <Grid item xs={11} md={11} sm={11}>
          <TextField
            placeholder="Write Todo here"
            fullWidth
            value={item.title}
            onChange={(event) => {
              setItem({ title: event.target.value });
            }}
            onKeyDown={onkeydown}
          ></TextField>
        </Grid>
        <Grid item xs={1} md={1} sm={1}>
          <Button color="secondary" variant="text" style={{ height: "100%" }}>
            <i
              className="fa-solid fa-square-plus"
              style={{ fontSize: "2rem" }}
              onClick={onclick}
            ></i>
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AddToDo;
