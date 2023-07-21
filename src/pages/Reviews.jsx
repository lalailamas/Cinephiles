import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailsMovie } from "../api/movieApi";
import star from "../assets/Star-1.svg";
import ReviewsList from "../components/ReviewsList";

const Reviews = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    fetchDetailsMovie(movieId)
      .then((data) => {
        setMovieDetails(data);
      })
      .catch((error) => {
        console.error(error);
        setMovieDetails(null);
      });
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setMovieDetails("");
  };

  return (
    <div className="text-white">
      <div className="flex justify-center w-full h-60">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
          alt={"backdrop_path"}
          className="object-cover w-full h-auto p-8"
        ></img>
      </div>
      <div className="flex flex-row mt-9 items-start gap-5 p-8">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt="poster_path"
          className="rounded-lg border border-custom-light-yellow w-60 h-200 mr-6"
        />
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">{movieDetails.title}</h1>
          <h2>{movieDetails.release_date.split("-")[0]}</h2>
          <p className="my-2">
            <em className="italic">{movieDetails.tagline}</em>
          </p>
          <p className="my-2">{movieDetails.overview}</p>
        </div>
        <div className="flex justify-end mt-6">
          <p>
            <img src={star} alt="Star" className="flex h-10 mr-4" />
            <span>{movieDetails.vote_average} </span>
          </p>
        </div>
      </div>
      <div className="m-4 p-4 flex justify-center items-center">
        <ReviewsList></ReviewsList>
      </div>
    </div>
  );
};

export default Reviews;
