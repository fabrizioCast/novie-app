// React.JS
import { useContext, useEffect, useState } from "react";

// React Router
import { useHistory } from "react-router-dom";

// Styles
import "./DynamicSearch.scss";

// Material-UI
import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Context
import MovieSearchContext from "./context/MovieSearchContext";

const DynamicSearch = () => {
  const history = useHistory();
  const { dynamicSearch, setDynamicSearch, showDynamicSearch } =
    useContext(MovieSearchContext);
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.themoviedb.org/3/search/movie?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US&query=${dynamicSearch}&page=1`;

  useEffect(() => {
    if (dynamicSearch.length > 2) {
      // Comienza a buscar desde las 2 palabras, para mayor rendimiento.
      const getData = async () => {
        try {
          setLoading(true);
          const res = await fetch(url);
          if (!res.ok) {
            let error = {
              error: "Error",
            };
            throw error;
          }
          const json = await res.json();
          setResponse(json);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      getData();
    } else {
      setResponse(null);
    }
  }, [dynamicSearch, url]);

  const handleClick = (id) => {
    setDynamicSearch(""); // Resetea el valor del input de busqueda.
    history.push(`/movie/${id}`);
  };

  return (
    <div>
      {loading && (
        <Box className="dynamicSearch">
          <div className="dynamicSearch__loading">
            <CircularProgress sx={{ margin: "0 auto" }} />
          </div>
        </Box>
      )}
      {response && showDynamicSearch && (
        <Box className="dynamicSearch">
          {response.results.map((el, index) => {
            if (index > 4) {
              return null;
            }
            return (
              <div
                className="dynamicSearch__item"
                key={index}
                onClick={() => handleClick(el.id)}
              >
                <div className="item__imagen">
                  <img
                    src={`https://image.tmdb.org/t/p/w300/${el.poster_path}`}
                    alt=""
                  />
                </div>
                <div className="item">
                  <div className="item__title">
                    <Typography variant="subtitle1">{el.title}</Typography>
                  </div>
                  <div className="item-info">
                    <div className="item-info__rating">
                      <Typography variant="subtitle2">
                        {`${el.vote_average}/10`}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default DynamicSearch;
