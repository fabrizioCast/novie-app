import { createContext, useState } from "react";

const MovieSearchContext = createContext();

const MovieSearchProvider = ({ children }) => {
  const [dynamicSearch, setDynamicSearch] = useState("");
  const [showDynamicSearch, setShowDynamicSearch] = useState(false);

  const data = {
    dynamicSearch,
    setDynamicSearch,
    showDynamicSearch,
    setShowDynamicSearch,
  };
  return (
    <MovieSearchContext.Provider value={data}>
      {children}
    </MovieSearchContext.Provider>
  );
};

export { MovieSearchProvider };
export default MovieSearchContext;
