import "./App.css";

import { useState } from "react";

import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="App">
          <ImprovedMovieList />
        </div>
      )}
    </>
  );
}

export default App;
