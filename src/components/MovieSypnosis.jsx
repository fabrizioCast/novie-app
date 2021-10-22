import { Typography } from "@mui/material";
import { useContext } from "react";
import MovieContext from "./context/MovieContext";

//Styles
import "./MovieSypnosis.scss";

const MovieSypnosis = ({ data }) => {
  const { ref } = useContext(MovieContext);
  return (
    <div>
      <div ref={ref} className="overview__sypnosis">
        <Typography variant="h6">Sypnosis</Typography>
        <Typography variant="subtitle1" className="content-color">
          {data}
        </Typography>
      </div>
    </div>
  );
};

export default MovieSypnosis;
