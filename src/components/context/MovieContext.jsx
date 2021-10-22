import { createContext, useState } from "react";
import { useInView } from "react-intersection-observer";

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [overView, setOverView] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  const data = { overView, setOverView, ref, inView };
  return <MovieContext.Provider value={data}>{children}</MovieContext.Provider>;
};

export { MovieProvider };
export default MovieContext;
