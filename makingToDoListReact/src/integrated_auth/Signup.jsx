import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import { api_base_url } from "./api-config";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

function Signup() {
  const navi = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const username = data.get("username");
    const password = data.get("password");
    const password2 = data.get("password2");

    if (password === password2) {
      signup({ username, password });
    } else {
      alert("비밀번호가 다릅니다.");
    }
  };
  const signup = (userDTO) => {
    axios
      .post(`${api_base_url}/auth/signup`, userDTO)
      .then((response) => {
        console.log(response);
        navi("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
      <Grid container spacing={2} style={{ marginBottom: "20px" }}>
        <Grid item xs={12}>
          <Typography component="h1" variant="h5">
            <span>회원가입</span>
            <i
              className="fa-solid fa-user-pen"
              style={{ marginLeft: "10px", color: "#ccc" }}
            ></i>
          </Typography>
        </Grid>
      </Grid>

      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              name="username"
              label="아이디"
              autoComplete="username"
              autoFocus
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              name="password"
              label="비밀번호"
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              type="password"
              variant="outlined"
              required
              fullWidth
              id="password2"
              name="password2"
              label="비밀번호 확인"
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" fullWidth variant="contained">
              Signup
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Link to="/signin">
              <Button fullWidth onClikc={() => {}}>
                <i
                  className="fa-solid fa-bell"
                  style={{ color: "blue", marginRight: "5px" }}
                  mr={3}
                ></i>
                계정있음
              </Button>
            </Link>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default Signup;
