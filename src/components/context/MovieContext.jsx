import { createContext, useState } from "react";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [overView, setOverView] = useState(false);

  const data = {
    overView,
    setOverView,
  };
  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MovieProvider };
export default MovieContext;
