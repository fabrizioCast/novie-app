const SimilarMovies = ({ id }) => {
  const [response, setResponse] = useState(null);

  //Get data
  const urlfetch = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=a70cdf7150610596a2441d3771de20cf&language=en-US`;
  let { data, loading } = useFetch(urlfetch);
  return <div></div>;
};

export default SimilarMovies;
