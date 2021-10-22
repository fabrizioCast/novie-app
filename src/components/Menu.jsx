//Material UI
import {
  Grid,
  Hidden,
  Link,
  List,
  ListItem,
  SwipeableDrawer,
  Typography,
  useTheme,
} from "@mui/material";
import Search from "./Search";
import { Box } from "@mui/system";
import { categories, typeMovies } from "./data/moviesData";

//Styles

const Menu = ({ isOpen, setIsOpen }) => {
  const theme = useTheme();

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <SwipeableDrawer open={isOpen} onClose={handleOpen} onOpen={handleOpen}>
      <List component="nav" disablePadding>
        <Hidden smUp>
          <ListItem>
            <Box sx={{ padding: "10px", width: "100%" }}>
              <Search />
            </Box>
          </ListItem>
        </Hidden>
        <ListItem
          sx={{ borderBottom: `1px solid ${theme.palette.secondary.main}` }}
        >
          <Typography variant="h6">Generos</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2} paddingBottom="5px">
            {categories.map((el, index) => (
              <Grid item xs={6} key={index}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: theme.palette.secondary.contrastText }}
                >
                  <Typography variant="subtitle1">{el}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </ListItem>
        <ListItem
          sx={{ borderBottom: `1px solid ${theme.palette.secondary.main}` }}
        >
          <Typography variant="h6">Peliculas</Typography>
        </ListItem>
        <ListItem>
          <Grid container spacing={2}>
            {typeMovies.map((el, index) => (
              <Grid item xs={6} key={index}>
                <Link
                  href="#"
                  underline="hover"
                  sx={{ color: theme.palette.secondary.contrastText }}
                >
                  <Typography variant="subtitle1">{el}</Typography>
                </Link>
              </Grid>
            ))}
          </Grid>
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
};

export default Menu;
