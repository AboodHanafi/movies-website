import {
  FlexColumn,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";

import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router";
import CRUDRequsests from "../../API";

function HomeScreen(props) {
  // const queryParams = new URLSearchParams(window.location.search);
  // const test = queryParams.get("test");
  // console.log(test);
  const [moviesList, setmoviesList] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [pageNumber, setpageNumber] = useState(1);
  const [randomIndex, setrandomIndex] = useState(0);

  const fetchData = useCallback(async () => {
    const response = await CRUDRequsests.get(
      `/movie/popular?api_key=2e8efac9cd5db46e1b028cdc108e3440&page=${pageNumber}`
    );
    setmoviesList([...moviesList, ...response.data.results]);
    setisLoading(false);
  }, [pageNumber]);

  const handleLoadMore = () => {
    setpageNumber((prevState) => prevState + 1);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    setrandomIndex(Math.floor(Math.random() * 10));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <HeroSection
        img={
          "http://image.tmdb.org/t/p/w1280/" +
          moviesList[randomIndex].backdrop_path
        }
        onClick={() => navigate(`/movie/${moviesList[randomIndex].id}`)}
      >
        <InnerHeroSection>
          <Title>{moviesList[randomIndex].title}</Title>
          <Description>{moviesList[randomIndex].overview}</Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
          {moviesList.map((item) => {
            return (
              <Card
                key={item.id}
                id={item.id}
                name={item.title}
                img={"https://image.tmdb.org/t/p/w500" + item.poster_path}
              />
            );
          })}
        </CardsContainer>
        <LoadMore isLoading={false} onClick={handleLoadMore}>
          Load more...
        </LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
