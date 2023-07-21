import SearchInput from "../components/SearchInput";
import BrowseBy from "../components/BrowseBy";
import MoviesList from "../components/MoviesList";
import { useState, useEffect } from "react";
import {
  fetchGenreMovie,
  fetchSearchMovie,
  fetchMoviesByGenre,
} from "../api/movieApi";

const Films = () => {
  const [searchMovie, setSearchMovie] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filterGenre, setFilterGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    fetchSearchMovie(value)
      .then((data) => {
        setSearchMovie(data);
      })
      .catch((error) => {
        console.error(error);
        setSearchMovie([]);
      });
  };

  useEffect(() => {
    fetchGenreMovie()
      .then((data) => {
        setFilterGenre(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (selectedGenre) {
      fetchMoviesByGenre(selectedGenre)
        .then((data) => {
          setMovies(data);
        })
        .catch((error) => {
          console.error(error);
          setMovies([]);
        });
    } else {
      setMovies([]);
    }
  }, [selectedGenre]);

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  return (
    <>
      <div className="flex flex-row gap-6 justify-center">
        <BrowseBy
          selectedGenre={selectedGenre}
          handleGenreChange={handleGenreChange}
          filterGenre={filterGenre}
        />
        <SearchInput
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <MoviesList searchMovie={searchMovie} movies={movies} />
    </>
  );
};

export default Films;
