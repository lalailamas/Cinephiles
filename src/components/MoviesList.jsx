/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const MoviesList = ({ searchMovie, movies }) => {
  return (
    <div>
      {searchMovie.length ||
        (movies.length === 0 && (
          <p className="text-white mt-20 flex justify-center">
            No results found
          </p>
        ))}
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {searchMovie.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center justify-center mt-10"
          >
            <Link to={`/reviews/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="max-w-full h-auto rounded-lg border border-custom-light-yellow"
              />
            </Link>
          </div>
        ))}
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center justify-center mt-10"
          >
            <Link to={`/reviews/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="max-w-full h-auto rounded-lg border border-custom-light-yellow"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
