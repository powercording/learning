import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

function Navbar() {
  const navi = useNavigate();
  const onClick = () => {
    localStorage.setItem("ACCESS_TOKEN", null);
    navi("/signin");
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Typography variant="h6">오늘의 할일</Typography>
          </Grid>
          <Grid item onClick={onClick}>
            <Button color="inherit" raised="true">
              <i
                className="fa-solid fa-right-from-bracket"
                style={{ fontSize: "1rem" }}
              ></i>
              <Typography ml={3}>로그아웃</Typography>
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
