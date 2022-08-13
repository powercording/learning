import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import { getImage, getMovieInfo, InterfaceGetMovieInfo } from "../api";

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
function Home() {
  const { isLoading, data } = useQuery<InterfaceGetMovieInfo>(
    ["movies", "nowPlaying"],
    getMovieInfo
  );
  console.log(data, isLoading);

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
        </>
      )}
    </Wrapper>
  );
}

export default Home;
