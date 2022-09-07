import { useState } from "react";
import { useEffect } from "react";
import requests from "./request";
import classes from "./Banner.module.css";

const Banner = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`
      );
      const data = await response.json();
      console.log(data.results);
      setMovies(
        data.results[Math.floor(Math.random() * (data.results.length - 1))]
      );
    };
    fetchData();
  }, []);
  console.log(movies);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };
  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.contents}>
        <h1 className={classes.title}>
          {movies?.title || movies?.name || movies?.original_name}
        </h1>
        <div>
          <button className={classes.bannerButtons}>Play</button>
          <button className={classes.bannerButtons}>My List</button>
        </div>
        <h1 className={classes.description}>
          {truncate(movies?.overview, 150)}
        </h1>
      </div>
      <div className={classes.fade} />
    </header>
  );
};

export default Banner;
