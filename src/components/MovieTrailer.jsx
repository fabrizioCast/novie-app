import { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import { useFetch } from "./hooks/useFetch";

//Styles
import "./MovieTrailer.scss";

const MovieTrailer = ({ id, fullScreen }) => {
  const [response, setResponse] = useState(null);

  //Get data
  const urlfetch = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US`;
  let { data, loading } = useFetch(urlfetch);

  useEffect(() => {
    if (data && !loading) {
      setResponse(data);
    }
  }, [data, loading]);

  function getTrailer() {
    let key;
    response.results.map((el) => {
      if (el.type !== "Trailer") return null;

      return (key = el.key);
    });
    return key;
  }

  return (
    <div>
      {response && (
        <ReactPlayer
          url={`https://www.youtube.com/embed/${getTrailer()}?showinfo=1&enablejsapi=1&origin=http://localhost:3000`}
          controls={true}
          width="100%"
          height={fullScreen ? "100vh" : null}
          className="trailer__video"
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
              },
            },
          }}
        />
      )}
    </div>
  );
};

export default MovieTrailer;
