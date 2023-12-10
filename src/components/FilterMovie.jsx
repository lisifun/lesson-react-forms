// src/components/FilterMovies.jsx

import { useState } from "react";

function FilterMovies({ firstLetter, setFirstLetter }) {
  //   const [firstLetter, setFirstLetter] = useState("All");

  const handleSelect = (e) => {
    setFirstLetter(e.target.value);

    console.log("selected", e.target.value);
    // filterMovieList(e.target.value)
  };

  return (
    <div className="FilterMovies">
      <label>Show movies by first letter:</label>
      <select value={firstLetter} onChange={handleSelect}>
        <option value="">All</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
      </select>
    </div>
  );
}

export default FilterMovies;
