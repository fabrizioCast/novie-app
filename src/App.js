import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MovieApp from "./components/MovieApp";
import "./components/style.css";

const theme = createTheme({});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MovieApp />
    </ThemeProvider>
  );
}

export default App;
