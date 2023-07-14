import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchTopRatedMovies,
  fetchPopularMovies,
  fetchReviewMovie,
} from "../api/movieApi";

const Home = () => {
  const [topRated, setTopRated] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTopRatedMovies()
      .then((data) => {
        setTopRated(data);
      })
      .catch((err) => console.error(err));

    fetchPopularMovies().then((data) => {
      setMovie(data[0]);
    });
  }, []);

  useEffect(() => {
    if (movie !== null) {
      fetchReviewMovie(movie.id).then((data) => {
        setReviews(data);
      });
    }
  }, [movie]);

  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    } else {
      return content.slice(0, maxLength) + "...";
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <p className="flex text-white text-center mt-60 ml-20">
          {
            "Login or register to get started. You can also start as a guest. We're your home for rating and reviewing movies, create your own to-watch lists to be your source for lists and inspiration"
          }
        </p>
        <button className="group relative h-12 w-40 overflow-hidden rounded-full bg-white text-lg shadow ml-20 mt-4">
          <div className="absolute inset-0 w-3 bg-custom-light-yellow transition-all duration-[250ms] ease-out group-hover:w-full"></div>
          <span className="relative text-black group-hover:text-white">
            <Link to="/films">Start</Link>
          </span>
        </button>
      </div>
      <div className="container ml-40 mt-6">
        <h1 className="text-2xl font-bold text-white">
          POPULAR FILMS THIS WEEK
        </h1>
        <div className="flex overflow-x-scroll">
          {topRated.map((topRated) => (
            <div key={topRated.id} className="flex-none w-48 mr-2">
              <img
                src={`https://image.tmdb.org/t/p/w200${topRated.poster_path}`}
                alt={topRated.title}
                className="w-full rounded-lg border border-custom-light-yellow"
              />
              <div className="mt-2">
                <h2 className="text-lg font-semibold text-white">
                  {topRated.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-2xl font-bold text-white mt-10 mb-4">
            POPULAR REVIEWS of <em>{movie?.title} </em>
          </h1>
          <div className="flex flex-row">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie?.poster_path}`}
              alt={"poster-movie"}
              className="rounded-lg border border-custom-light-yellow mr-2"
            />

            <ul className="text-white mt-18">
              {reviews.map((reviewItem) => (
                <li
                  key={reviewItem.author}
                  className="border-b-2 mb-2 text-white"
                >
                  Author: {reviewItem.author}
                  <br></br>
                  <em> {truncateContent(reviewItem.content, 300)}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
