import React from "react";
import styled from "styled-components";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import { Box, Button, Typography } from "@mui/material";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 60px;
  top: 0;
  width: 100%;
  font-size: 14;
  background-color: black;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
`;
const Items = styled.ul`
  display: flex;
  align-items: center;
  color: white;
`;
const Item = styled.li`
  margin-right: 20px;
`;

function Header() {
  return (
    <Nav>
      <Col>
        <Box mr={5} ml={5}>
          <SlideshowIcon fontSize="large" color="primary" />
        </Box>

        <Items>
          <Item>
            <Typography variant="subtitle1" color={"primary"}>
              Home
            </Typography>
          </Item>
          <Item>
            <Typography variant="subtitle1" color={"primary"}>
              Tv shows
            </Typography>
          </Item>
        </Items>
      </Col>
      <Col>
        <Button style={{ marginRight: "50px" }}>search</Button>
      </Col>
    </Nav>
  );
}

export default Header;
