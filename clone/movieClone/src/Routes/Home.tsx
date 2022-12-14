import React, { useState } from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getImage, getMovieInfo, InterfaceGetMovieInfo } from "../api";
import { motion, AnimatePresence } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
  background-image: linear-gradient(rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 1)),
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
const MoviDetailImage = styled.div`
  width: 100%;
  height: 400px;
  background-size: cover;
  background-position: center center;
  margin-bottom: 10px;
`;
const MoviDetailTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px;
  h2 {
    font-size: 28px;
  }
`;
const MovieDetailContents = styled.div`
  display: flex;
  padding: 20px;
`;
const MovidetailFooter = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(210, 250, 250, 0.8);
  height: 35px;
`;
const Overlayed = styled(motion.div)`
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  opacity: 0;
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

//????????? flex??? ??????????????????
const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
  top: -110px;
  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
const Item = styled(motion.div)<{ bgimage: string }>`
  background-color: white;
  height: 200px;
  cursor: pointer;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-position: center center;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;
const MovieDtaile = styled(motion.div)`
  position: fixed;
  background-color: black;
  width: 35vw;
  height: 80vh;
  top: 150px;
  right: 0;
  left: 0;
  margin: 0 auto;
  border-radius: 15px;
  overflow: hidden;
`;

const infoVariants = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};

const rowVariants = {
  hidden: (isback: boolean) => ({
    x: isback ? -window.outerWidth : window.outerWidth,
  }),
  visible: {
    x: 0,
  },
  exit: (isback: boolean) => ({
    x: isback ? window.outerWidth : -window.outerWidth,
  }),
};
const StyledDiv = styled.div`
  display: flex;
  position: relative;
  top: -150px;
`;
const SliderButton = styled.button`
  height: 40px;
  position: absolute;
  display: flex;
  align-items: center;
  background-color: transparent;
  color: whitesmoke;
  border: none;
  cursor: pointer;
  &:first-child {
    left: 10px;
  }
  &:last-child {
    right: 10px;
  }
`;
const P = styled.p``;
const H2 = styled.h2``;
const H4 = styled.h4``;
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
function Home() {
  const [index, setIndex] = useState(0);
  const [isback, setIsback] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const movieMatch = useMatch("/movieclone_build/:moviId");

  const navigate = useNavigate();

  const toggleLeaving = () => {
    setLeaving((prev) => !prev);
  };
  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setIsback((prev) => false);
      toggleLeaving();
      const totalMovie = data?.results.length - 1;
      const indexLimit = Math.floor(totalMovie / offset) - 1;

      setIndex((prev) => (prev === indexLimit ? 0 : prev + 1));
    }
  };
  const decreaseIndex = () => {
    if (data) {
      setIsback((prev) => true);
      if (leaving) return;
      toggleLeaving();
      const totalMovie = data?.results.length - 1;
      const indexLimit = Math.floor(totalMovie / offset) - 1;

      setIndex((prev) => (prev === 0 ? indexLimit : prev - 1));
    }
  };

  const { isLoading, data } = useQuery<InterfaceGetMovieInfo>(
    ["movies", "nowPlaying"],
    getMovieInfo
  );

  const offset = 6;

  const clickedMovieInfo =
    movieMatch?.params.moviId &&
    data?.results.filter((movie) => movie.id + "" === movieMatch.params.moviId);

  const getMovieDetaileInfo = (movieId: string) => {
    navigate(`/movieclone_build/${movieId}`);
  };

  const returnToHome = () => {
    navigate("/movieclone_build");
  };

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>loading movies...</Loader>
      ) : (
        <>
          <Banner
            backgroundImage={getImage(data?.results[0].backdrop_path || "")}
          >
            <Title>{data?.results[0].title}</Title>
            <OverView>{data?.results[0].overview}</OverView>
          </Banner>
          <StyledDiv>
            <SliderButton onClick={decreaseIndex}>
              <ArrowBackIosIcon />
              PREV
            </SliderButton>
            <SliderButton onClick={increaseIndex}>
              NEXT
              <ArrowForwardIosIcon />
            </SliderButton>
          </StyledDiv>
          <Slider>
            <AnimatePresence
              initial={false}
              onExitComplete={toggleLeaving}
              custom={isback}
            >
              <Row
                custom={isback}
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
                      onClick={() => getMovieDetaileInfo(movie.id + "")}
                      initial="normal"
                      whileHover="hover"
                      variants={hoverAnimation}
                      key={movie.id}
                      bgimage={getImage(movie.backdrop_path, "w400")}
                      transition={{ type: "tween" }}
                      layoutId={movie.id + ""}
                    >
                      <ItemInfo variants={infoVariants}>
                        <H4>{movie.title}</H4>
                        <P>{movie.release_date}</P>
                      </ItemInfo>
                    </Item>
                  ))}
              </Row>
            </AnimatePresence>
            <AnimatePresence>
              {movieMatch ? (
                <>
                  <Overlayed
                    onClick={returnToHome}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                  <MovieDtaile layoutId={movieMatch.params.moviId}>
                    {clickedMovieInfo && (
                      <>
                        <MoviDetailImage
                          style={{
                            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 50%, rgba(0,0,0,1)),url(${getImage(
                              clickedMovieInfo[0].backdrop_path,
                              "w400"
                            )})`,
                            fontSize: 0,
                          }}
                        ></MoviDetailImage>

                        <MoviDetailTitle>
                          <H2>{clickedMovieInfo[0].title}</H2>
                          <P>{clickedMovieInfo[0].release_date}</P>
                        </MoviDetailTitle>
                        <MovieDetailContents>
                          <P>{clickedMovieInfo[0].overview}</P>
                        </MovieDetailContents>
                        <MovidetailFooter></MovidetailFooter>
                      </>
                    )}
                  </MovieDtaile>
                </>
              ) : null}
            </AnimatePresence>
          </Slider>
        </>
      )}
    </Wrapper>
  );
}

export default Home;
