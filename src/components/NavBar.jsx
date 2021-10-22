//Material UI
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Button,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { makeStyles } from "@mui/styles";

//Components
import Search from "./Search";

//Styles
import "./NavBar.scss";

import { useHistory } from "react-router-dom";
import MovieContext from "./context/MovieContext";
import { useContext } from "react";
import { Box } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const NavBar = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const { overView, inView } = useContext(MovieContext);

  const checkInView = () => {
    if (overView && !inView) {
      return "navbar overView__nav";
    } else {
      return "navbar";
    }
  };
  return (
    <div>
      <AppBar sx={{ boxShadow: "none" }} className={checkInView()}>
        <Toolbar>
          <Box className="navBar__logo">
            <div
              className="navBar__logo-fix navBar__items"
              onClick={() => history.push("/")}
            >
              <Typography
                variant="button"
                component="p"
                className="navBar__items"
              >
                Novies
              </Typography>
            </div>
          </Box>
          <Search />
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
