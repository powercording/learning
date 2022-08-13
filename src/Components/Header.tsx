import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Button, Grid, Typography } from "@mui/material";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch } from "react-router-dom";

const Svg = styled(motion.svg)`
  width: 50px;
  fill: ${(porps) => porps.theme.red};
  path {
    stroke-width: 0.1px;
    stroke: white;
  }
`;

const logovariant = {
  normal: {
    fillOpacity: 1,
  },
  active: {
    fillOpacity: [1, 0, 1],
    transition: {
      repeat: Infinity,
    },
  },
};
const Circle = styled(motion.span)`
  width: 18px;
  height: 6px;
  background-color: lightgreen;
  position: absolute;
  border-radius: 3px;
  bottom: -5px;
`;
const Input = styled(motion.input)`
  position: absolute;
  height: 50%;
  width: 350px;
  transform-origin: right;
  padding-left: 15px;
`;

function Header() {
  const [searchOpen, setSearchOpen] = useState(false);
  const animation = useAnimation();
  const navAnimation = useAnimation();
  const homeMatch = useMatch("/");
  const tvMatch = useMatch("tv");
  const { scrollY } = useScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,1)",
        });
      } else {
        navAnimation.start({
          backgroundColor: "rgba(0,0,0,0)",
        });
      }
    });
  }, [scrollY]);

  const openSearch = () => {
    if (searchOpen) {
      animation.start({
        scaleX: 0,
      });
    } else {
      animation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((current) => !current);
  };

  return (
    <motion.div
      animate={navAnimation}
      style={{
        display: "flex",
        flexDirection: "row",
        position: "fixed",
        alignItems: "center",
        justifyContent: "space-between",
        top: 0,
        // backgroundColor: "transparent",
        height: "70px",
        width: "100%",
      }}
    >
      <Grid
        sm={6}
        item
        gap={5}
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item ml={2}>
          <Svg
            variants={logovariant}
            initial="normal"
            whileHover="active"
            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiBox-root css-uqopch"
            focusable="false"
            aria-hidden="true"
            viewBox="0 0 24 24"
            data-testid="SlideshowIcon"
          >
            <motion.path
              fill="blue"
              d="M10 8v8l5-4-5-4zm9-5H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"
            ></motion.path>
          </Svg>
        </Grid>

        <Grid item position="relative" height={"100%"}>
          <Link to="/">
            <Box display="flex" justifyContent="center">
              <Typography variant="subtitle1" color={"white"}>
                Home
              </Typography>
              {homeMatch && (
                <Circle layoutId="circle" transition={{ duration: 0 }} />
              )}
            </Box>
          </Link>
        </Grid>

        <Grid item position="relative">
          <Link to="tv">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Typography variant="subtitle1" color={"white"}>
                Tv shows
              </Typography>
              {tvMatch && (
                <Circle layoutId="circle" transition={{ duration: 0 }} />
              )}
            </Box>
          </Link>
        </Grid>
      </Grid>

      <Grid item md={6} xs={1}>
        <Box display={"flex"} justifyContent="flex-end" marginRight={3}>
          <Input
            type="text"
            initial={{ scaleX: 0 }}
            transition={{ type: "just" }}
            animate={animation}
          ></Input>
          <Button
            onClick={openSearch}
            color={searchOpen ? "primary" : "inherit"}
          >
            search
          </Button>
        </Box>
      </Grid>
    </motion.div>
  );
}

export default Header;
