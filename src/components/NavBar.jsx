//Material UI
import { Toolbar, AppBar, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

//Components
import Search from "./Search";

//Styles
import "./NavBar.scss";

import { useHistory } from "react-router-dom";

import { Box } from "@mui/system";
import DynamicSearch from "./DynamicSearch";
import { MovieSearchProvider } from "./context/MovieSearchContext";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar sx={{ boxShadow: "none" }}>
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
          <MovieSearchProvider>
            <div className="navBar__search">
              <Search />
              <DynamicSearch />
            </div>
          </MovieSearchProvider>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
};

export default NavBar;
