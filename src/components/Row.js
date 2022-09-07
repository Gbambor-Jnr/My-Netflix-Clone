import { useState } from "react";
import { useEffect } from "react";
// import axios from "../pages/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import classes from "./Row.module.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTraileUrl] = useState("");

  useEffect(() => {
    // axios.get(props.fetchUrl).then((res) => {
    //   console.log(res);

    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${props.fetchUrl}`
      );
      const data = await response.json();
      console.log(data);
      setMovies(data.results);
    };
    fetchData();
  }, [props.fetchUrl]);

  const opts = {
    height: "500",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const clickHandler = (movie) => {
    if (trailerUrl) {
      setTraileUrl("");
    } else {
      console.log(movie);
      movieTrailer(movie?.name || "" || movie?.title)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);
          setTraileUrl(urlParams.get("v"));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //   let url = new URL("https://example.com?foo=1&bar=2");
  //   let params = new URLSearchParams(url.search);

  //   console.log(params.get("foo"));

  return (
    <>
      <h2>{props.title}</h2>
      <div className={classes.container}>
        {movies.map((movie) => (
          <div key={movie.id}>
            <img
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
              className={`${props.isLarge ? classes.row : classes.img}`}
              onClick={clickHandler.bind(null, movie)}
            />
          </div>
        ))}
      </div>
      {trailerUrl && (
        <YouTube videoId={trailerUrl} opts={opts} className={classes.YouTube} />
      )}
    </>
  );
};

export default Row;
