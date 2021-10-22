//React.js
import { useContext, useEffect, useState } from "react";

//React Router
import { useParams } from "react-router";

//Material-UI
import { Button, Hidden, Typography } from "@mui/material";
import { Box } from "@mui/system";

//Hooks
import { useFetch } from "./hooks/useFetch";

//Context
import MovieContext from "./context/MovieContext";

//Styles
import "./MovieOverview.scss";

//Components
import MovieSypnosis from "./MovieSypnosis";
import MovieGeneres from "./MovieGeneres";
import MovieRating from "./MovieRating";
import SkeletonLoad from "./SkeletonLoad";
import Slider from "./Slider";

const MovieOverview = () => {
  let { id } = useParams();

  const { setOverView } = useContext(MovieContext);
  const [response, setResponse] = useState(null);
  const [responseCredits, setResponseCredits] = useState(null);
  const [trailer, setTrailer] = useState(null);

  //Get movie details
  let urlMovie = `https://api.themoviedb.org/3/movie/${id}?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US`;
  let { data, loading } = useFetch(urlMovie);

  //Get movie credits
  urlMovie = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US`;
  const { data: dataCredits, loading: loadingCredits } = useFetch(urlMovie);

  //Get url trailer
  const urlTrailer = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US`;
  let { data: dataTrailer, loading: loadingTrailer } = useFetch(urlTrailer);

  useEffect(() => {
    window.scroll({ top: 0 }); //Fix scroll
    setResponse(null);
    setResponseCredits(null);
  }, [id]);

  useEffect(() => {
    if (
      data &&
      !loading &&
      dataCredits &&
      !loadingCredits &&
      dataTrailer &&
      !loadingTrailer
    ) {
      setResponse(data);
      setResponseCredits(dataCredits);
      setTrailer(dataTrailer);
      setOverView(true);
    }
  }, [
    data,
    loading,
    dataCredits,
    loadingCredits,
    setOverView,
    dataTrailer,
    loadingTrailer,
  ]);

  function getTrailer() {
    let key;
    trailer.results.map((el) => {
      if (el.type !== "Trailer") return null;

      return (key = el.key);
    });
    return key;
  }

  return (
    <div>
      {response ? (
        <div>
          <div className="overview">
            <div className="overview__image">
              <Hidden smDown>
                <img
                  src={`https://image.tmdb.org/t/p/original/${response.backdrop_path}`}
                  alt="movie"
                />
              </Hidden>
              <Hidden smUp>
                <img
                  src={`https://image.tmdb.org/t/p/original/${response.poster_path}`}
                  alt="movie"
                />
              </Hidden>
            </div>
            <div className="overview__info">
              <Hidden smDown>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${response.poster_path}`}
                  alt="movie"
                />
              </Hidden>
              <div className="overview__content">
                <div className="overview__title">
                  <Typography variant="h4">{response.title}</Typography>
                </div>
                <MovieRating
                  data={responseCredits}
                  rating={response.vote_average}
                />
                <MovieGeneres data={response.genres} />
                <MovieSypnosis data={response.overview} />
                <div className="overview__content__trailer">
                  <Button
                    variant="outlined"
                    href={`https://www.youtube.com/watch?v=${getTrailer()}`}
                    target="__blank"
                    sx={{ margin: "10px 0" }}
                  >
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Box
            sx={{
              padding: "20px",
            }}
          >
            <Typography variant="h6" className="title-color similar-movies">
              Similar Movies
            </Typography>
            <Slider
              url={`https://api.themoviedb.org/3/movie/${id}/similar?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US&page=1`}
            />
          </Box>
        </div>
      ) : (
        <SkeletonLoad />
      )}
    </div>
  );
};

export default MovieOverview;
