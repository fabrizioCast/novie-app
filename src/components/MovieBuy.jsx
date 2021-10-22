import { Button } from "@mui/material";

//Styles
import "./MovieBuy.scss";

const MovieBuy = ({ id }) => {
  return (
    <div className="buy">
      <Button variant="contained" component="a" className="buy__button">
        Buy Movie
      </Button>
    </div>
  );
};

export default MovieBuy;
