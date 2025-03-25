import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recommends";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
import movies from "../movies.json";

const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  useEffect(() => {
    console.log("Movies loaded:", movies);

    let recommends = [];
    let newDisneys = [];
    let originals = [];
    let trending = [];

    Object.values(movies.movies).forEach((movie) => {
      switch (movie.type) {
        case "recommend":
          recommends.push(movie);
          break;
        case "new":
          newDisneys.push(movie);
          break;
        case "original":
          originals.push(movie);
          break;
        case "trending":
          trending.push(movie);
          break;
      }
    });

    dispatch(
      setMovies({
        recommend: recommends,
        newDisney: newDisneys,
        original: originals,
        trending: trending,
      })
    );
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
