//React-Router
import { HashRouter, Route, Switch } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";

//Components
import MovieHeader from "./MovieHeader";

import MovieHome from "./MovieHome";
import MovieOverview from "./MovieOverview";

const MovieApp = () => {
  return (
    <HashRouter>
      <MovieProvider>
        <MovieHeader />
        <Switch>
          <Route exact path="/" component={MovieHome} />
          <Route path="/movie/:id" component={MovieOverview} />
        </Switch>
      </MovieProvider>
    </HashRouter>
  );
};

export default MovieApp;
