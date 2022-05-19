import {
  FlexColumn,
  FlexRow,
  InnerSection,
  SpinnerContainer,
} from "../../Global.Styles";
import { useParams, useNavigate } from "react-router";
import { useEffect, useState, useCallback } from "react";
import CRUDRequsests from "../../API";
import {
  CardsContainer,
  HeroSection,
  InnerHeroSection,
  MoviesTitle,
} from "../HomeScreen/HomeScreen.Styles";
import {
  InfoText,
  MovieDetailsBox,
  MovieImage,
  MovieInfoBox,
  NavigatorContainer,
  NavigatorInnerContainer,
  NavigatorSpan,
  ProgressBar,
  ProgressBarContainer,
  ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";

function MovieScreen(props) {
  const params = useParams().id;
  const [movie, setMovie] = useState({});
  const [isLoading, setisLoading] = useState(true);

  const fetchData = useCallback(async () => {
    const response = await CRUDRequsests.get(
      `/movie/${params}?api_key=2e8efac9cd5db46e1b028cdc108e3440`
    );
    setMovie(response.data);
    setisLoading(false);
  }, [params]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <FlexColumn>
      <NavigatorContainer>
        <NavigatorInnerContainer>
          <NavigatorSpan
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </NavigatorSpan>
          <NavigatorSpan>/ {movie.original_title}</NavigatorSpan>
        </NavigatorInnerContainer>
      </NavigatorContainer>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/" + movie.backdrop_path}
      >
        <InnerHeroSection>
          <MovieInfoBox>
            <MovieImage
              src={"http://image.tmdb.org/t/p/w1280/" + movie.poster_path}
              alt={movie.original_title}
            />
            <MovieDetailsBox>
              <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                {movie.original_title}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                {movie.tagline}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                {movie.overview}
              </InfoText>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                IMDB RATING
              </InfoText>
              <ProgressBarContainer>
                <ProgressBar>
                  <ProgressBarPercentage width={82} />
                </ProgressBar>
                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                  {movie.vote_average}
                </InfoText>
              </ProgressBarContainer>
              <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                popularity
              </InfoText>
              <InfoText>{movie.popularity}</InfoText>
            </MovieDetailsBox>
          </MovieInfoBox>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Production Companies</MoviesTitle>
        <CardsContainer>
          {movie.production_companies.map((item) => {
            return (
              <ActorCard
                key={item.id}
                id={item.id}
                name={item.name}
                img={"https://image.tmdb.org/t/p/w500/" + item.logo_path}
                country={item.origin_country}
              />
            );
          })}
        </CardsContainer>
      </InnerSection>
    </FlexColumn>
  );
}

export default MovieScreen;
