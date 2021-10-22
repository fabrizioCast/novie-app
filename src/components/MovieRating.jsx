import { Typography } from "@mui/material";

//Icons
import StarRateIcon from "@mui/icons-material/StarRate";

//Styles
import "./MovieRating.scss";

const MovieRating = ({ data, rating }) => {
  const getDirector = () => {
    let director;
    data.crew.map((el) => {
      if (el.job === "Director") {
        return (director = el.name);
      }
      return director;
    });
    return `Director: ${director}`;
  };

  return (
    <div className="overview__rating">
      <Typography variant="subtitle1" className="content-color">
        {getDirector()}
      </Typography>
      <div className="divider" />
      <div className="overinfo__star content-color">
        <Typography variant="subtitle1">{rating}</Typography>
        <StarRateIcon sx={{ color: "#FCA139" }} />
      </div>
    </div>
  );
};

export default MovieRating;
