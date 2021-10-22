import { Link, Stack, Typography, useTheme } from "@mui/material";
import { Moviescategories, typeMovies } from "./data/moviesData";
import { alpha, Box } from "@mui/system";

const SideBard = () => {
  const theme = useTheme();

  return (
    <Stack
      spacing={2}
      sx={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100%",
        width: "max-context",
        color: theme.palette.primary.contrastText,
        marginLeft: "30px",
      }}
    >
      <Typography variant="h6">Generos</Typography>
      {Moviescategories.map((el, index) => (
        <Box key={index}>
          <Link
            href="#"
            underline="hover"
            sx={{ color: alpha(theme.palette.primary.contrastText, 0.4) }}
          >
            <Typography variant="subtitle1">{el}</Typography>
          </Link>
        </Box>
      ))}
      <Typography variant="h6">Peliculas</Typography>
      {typeMovies.map((el, index) => (
        <Box key={index}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: alpha(theme.palette.primary.contrastText, 0.4),
            }}
          >
            <Typography variant="subtitle1">{el}</Typography>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};

export default SideBard;
