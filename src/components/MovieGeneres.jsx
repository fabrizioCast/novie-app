import { Typography } from "@mui/material";

//Styles
import "./MovieGeneres.scss";

const MovieGeneres = ({ data }) => {
  return (
    <div className="overview__genere">
      {data.map((el, index) => (
        <div className="genere__item" key={index}>
          <Typography variant="caption" className="content-color">
            {el.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default MovieGeneres;
