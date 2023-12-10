// src/components/ImprovedMovieList.jsx

import { useState } from "react";
import moviesDataJson from "../movies-data.json";
import MovieCard from "./MovieCard";
import ImprovedMovieCard from "./ImprovedMovieCard";
import AddMovie from "./AddMovie";
import FilterMovies from "./FilterMovie";

function ImprovedMovieList() {
  const [movies, setMovies] = useState(moviesDataJson);
  const [firstLetter, setFirstLetter] = useState("");

  // const [moviesData, setMoviesData] = useState(moviesDataJson);
  // Declare a new state variable, which we'll call "showMovies"
  const [showMovies, setShowMovies] = useState(true);

  const deleteMovie = (movieId) => {
    const filteredMovies = movies.filter((movie) => {
      return movie._id !== movieId;
    });

    setMovies(filteredMovies);
  };

  const toggleShowMovies = () => {
    setShowMovies(!showMovies);
  };

  const addNewMovie = (newMovie) => {
    // Create a new array
    const updatedMovies = [newMovie, ...movies];
    // const updatedMoviesData = [newMovie, ...moviesData]
    setMovies(updatedMovies);
    // setMoviesData(updatedMoviesData);
  };

  // const filterMovieList = (str) => {
  //   let filteredMovies;

  //   if (str === "All") {
  //     filteredMovies = moviesData;
  //   } else {
  //     filteredMovies = moviesData.filter((movie) => {
  //       return movie.title[0].toLowerCase() === str.toLowerCase();
  //     });
  //   }

  //   setMovies(filteredMovies);
  // };

  let filtered = firstLetter
    ? movies.filter(
        (movie) => movie.title[0].toLowerCase() === firstLetter.toLowerCase()
      )
    : movies;

  return (
    <div>
      <h2>Improved Movie List</h2>

      <AddMovie addNewMovie={addNewMovie} />

      <FilterMovies firstLetter={firstLetter} setFirstLetter={setFirstLetter} />

      <button onClick={toggleShowMovies}>{showMovies ? "Hide" : "Show"}</button>

      {showMovies &&
        filtered.map((movie) => {
          return (
            <ImprovedMovieCard
              key={movie._id}
              movie={movie}
              deleteMovie={deleteMovie}
            />
          );
        })}
    </div>
  );
}

export default ImprovedMovieList;
