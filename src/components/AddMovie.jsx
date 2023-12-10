// src/components/AddMovie.jsx

import { useState } from "react";

function AddMovie({ addNewMovie }) {
  //   const [title, setTitle] = useState("");
  //   const [director, setDirector] = useState("");
  //   const [IMDBRating, setIMDBRating] = useState(5);
  //   const [hasOscars, setHasOscars] = useState(true);

  //   const handleTitleInput = e => setTitle(e.target.value);

  //   const handleDirectorInput = e => setDirector(e.target.value);

  //   const handleRatingInput = e => setIMDBRating(e.target.value);

  //   const handleOscarsInput = e => setHasOscars(e.target.checked);

  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    IMDBRating: 5,
    hasOscars: true,
  });

  const handleTextInput = (e) => {
    setNewMovie((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNumberInput = (e) => {
    setNewMovie((prev) => ({
      ...prev,
      [e.target.name]: Number(e.target.value),
    }));
  };

  const handleCheckInput = (e) => {
    setNewMovie((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };

  const handleSubmit = (e) => {
    // <==  ADD
    e.preventDefault();
    // const newMovie = { title, director, IMDBRating, hasOscars };

    console.log("Submitted: ", newMovie);
    addNewMovie(newMovie);
    // setTitle("");
    // setDirector("");
    // setIMDBRating(5);
    // setHasOscars(true);
    setNewMovie({
      title: "",
      director: "",
      IMDBRating: 5,
      hasOscars: true,
    });
  };

  return (
    <div className="AddMovie">
      <h4>Add a Movie</h4>

      {/* form will be added here */}
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          name="title"
          value={newMovie.title}
          onChange={handleTextInput}
        />

        <label>Director: </label>
        <input
          type="text"
          name="director"
          value={newMovie.director}
          onChange={handleTextInput}
        />

        <label>IMDB Rating: </label>
        <input
          type="number"
          name="IMDBRating"
          value={newMovie.IMDBRating}
          onChange={handleNumberInput}
        />

        <label>Won Oscars: </label>
        <input
          type="checkbox"
          name="hasOscars"
          checked={newMovie.hasOscars}
          onChange={handleCheckInput}
        />

        <button type="submit">Add a Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;
