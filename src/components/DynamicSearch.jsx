//Styles
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import MovieSearchContext from "./context/MovieSearchContext";
import { useHistory } from "react-router-dom";
import "./DynamicSearch.scss";

const DynamicSearch = () => {
  const history = useHistory();
  const {
    dynamicSearch,
    setDynamicSearch,
    showDynamicSearch,
    setShowDynamicSearch,
  } = useContext(MovieSearchContext);
  const [response, setResponse] = useState({});

  const url = `https://api.themoviedb.org/3/search/movie?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US&query=${dynamicSearch}&page=1`;

  useEffect(() => {
    if (dynamicSearch.length > 2) {
      const getData = async () => {
        try {
          const res = await fetch(url);
          if (!res.ok) {
            let error = {
              error: "Error",
            };
            throw error;
          }
          const json = await res.json();
          setResponse(json);
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
    setDynamicSearch(""); //Reset input value
    history.push(`/movie/${id}`);
  };

  return (
    <div>
      {response && showDynamicSearch && (
        <Box className="dynamicSearch">
          {response.results.map((el, index) => {
            if (index > 5) {
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
