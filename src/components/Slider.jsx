//React.JS
import { useEffect, useState } from "react";

//Hooks
import { useFetch } from "./hooks/useFetch";
import MoviesSlider from "./MoviesSlider";
import SkeletonLoad from "./SkeletonLoad";

//Styles
import "./Slider.scss";

const Slider = ({ url }) => {
  const [response, setResponse] = useState(null);
  let { data, loading } = useFetch(url);

  useEffect(() => {
    if (data) {
      setResponse(data.results);
    }
  }, [data]);

  return (
    <div>{loading ? <SkeletonLoad /> : <MoviesSlider data={response} />}</div>
  );
};

export default Slider;
