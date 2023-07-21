import { useEffect, useState } from "react";
import { fetchReviewMovie } from "../api/movieApi";
import { useParams } from "react-router-dom";

const ReviewsList = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId !== null) {
      fetchReviewMovie(movieId).then((data) => {
        setReviews(data);
      });
    }
  }, [movieId]);

  return (
    <div className="m-4 p-4">
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-custom-gray rounded-lg p-4 mb-4 shadow-md border-2 border-custom-yellow"
        >
          <div className="flex items-center mb-2">
            <p className="text-sm font-medium text-black">{review.author}</p>
          </div>
          <p className="text-black">
            <em>{review.content}</em>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsList;
