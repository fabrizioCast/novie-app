//Material UI
import { Typography } from "@mui/material";
import { useHistory } from "react-router";

//Styles
import "./MovieCard.scss";

const MovieCard = ({ title, img, year, id }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/movie/${id}`);
    window.scroll({ top: -1 }); //Fix scroll
  };

  return (
    <div>
      <a href="#acalink" data-id={id} onClick={handleClick}>
        <div className="movie-card">
          <div className="movie-card__image noselect">
            <div className="overlay"></div>
            <div className="year">
              <Typography
                variant="caption"
                component="span"
                className="movie-card__text"
              >
                {year}
              </Typography>
            </div>
            <img src={img} alt={title} />
          </div>
          <Typography variant="body2" className="movie-card__text">
            {title}
          </Typography>
        </div>
      </a>
    </div>
  );
};

export default MovieCard;
