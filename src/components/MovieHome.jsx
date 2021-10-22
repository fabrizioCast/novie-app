import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect } from "react";
import MovieContext from "./context/MovieContext";

import Slider from "./Slider";

const MovieHome = () => {
  const { setOverView } = useContext(MovieContext);
  useEffect(() => {
    setOverView(false);
  }, [setOverView]);
  return (
    <Box
      sx={{
        padding: "20px",
      }}
    >
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Trending
      </Typography>
      <Slider url="https://api.themoviedb.org/3/trending/movie/week?api_key=a70cdf7150610596a2441d3771de20cf" />
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Now Playing
      </Typography>
      <Slider url="https://api.themoviedb.org/3/movie/now_playing?api_key=a70cdf7150610596a2441d3771de20cf&language=es&page=1" />
      <Typography variant="h6" sx={{ color: "#fff" }}>
        Top rated
      </Typography>
      <Slider url="https://api.themoviedb.org/3/movie/top_rated?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US&page=1" />
    </Box>
  );
};

export default MovieHome;
