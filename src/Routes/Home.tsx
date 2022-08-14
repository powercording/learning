import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getImage, getMovieInfo, InterfaceGetMovieInfo } from "../api";
import { motion, AnimatePresence } from "framer-motion";

const Wrapper = styled.div`
  background-color: black;
`;
const Loader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Banner = styled.div<{ backgroundImage: string }>`
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.backgroundImage});
  background-size: cover;
`;
const Title = styled.h2`
  margin-bottom: 50px;
  font-size: 58px;
`;
const OverView = styled.p`
  font-size: 28px;
  font-weight: lighter;
  width: 650px;
  letter-spacing: 2px;
  word-spacing: 6px;
`;

const Slider = styled.div`
  position: relative;
`;
const ItemInfo = styled(motion.div)`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  opacity: 0;
  color: white;
  h4 {
    font-size: 18px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
  }
`;

//나중에 flex로 바꾸어볼까요
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
  top: -110px;
`;
const Item = styled(motion.div)<{ bgImage: string }>`
  background-color: white;
  height: 200px;

  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
function Home() {
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovie = data?.results.length - 1;
      const indexLimit = Math.ceil(totalMovie / offset) - 1;

      setIndex((prev) => (prev === indexLimit ? 0 : prev + 1));
    }
  };
  const { isLoading, data } = useQuery<InterfaceGetMovieInfo>(
    ["movies", "nowPlaying"],
    getMovieInfo
  );
  const rowVariants = {
    hidden: {
      x: window.outerWidth,
    },
    visible: {
      x: 0,
    },
    exit: {
      x: -window.outerWidth,
    },
  };
  const hoverAnimation = {
    normal: {
      scale: 1,
    },
    hover: {
      scale: 1.3,
      y: -50,
      transition: {
        delay: 0.5,
        type: "tween",
      },
    },
  };
  const offset = 6;

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>loading movies...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            backgroundImage={getImage(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
                key={index}
              >
                {data?.results
                  .slice(1)
                  .slice(offset * index, offset * index + offset)
                  .map((movie) => (
                    <Item
                      initial="normal"
                      whileHover="hover"
                      variants={hoverAnimation}
                      key={movie.id}
                      bgImage={getImage(movie.backdrop_path, "w400")}
                      transition={{ type: "tween" }}
                    >
                      <ItemInfo variants={infoVariants}>
                        <h4>{movie.title}</h4>
                        <p>{movie.release_date}</p>
                      </ItemInfo>
                    </Item>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
